
import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { filter, take } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatosPersonalesComponent } from './forms/datos-personales/datos-personales.component';
import { Personal } from '../../interfaces/personal.interface';
import { DatosPersonales } from '../../interfaces/datos-personales.interface';
import { DatosComunes } from '../../interfaces/datos-comunes.interface';
import { DatosComunesComponent } from './forms/datos-comunes/datos-comunes.component';
import { DatosPersonalesService } from 'src/app/services/datos-personales.service';
import { DatosComunesService } from 'src/app/services/datos-comunes.service';
import { CustomMessageService } from 'src/app/services/utils/message.service';
import { Title } from '@angular/platform-browser';
import { PlantillasComponent } from './plantillas/plantillas.component';
import { SituacionLaboralComponent } from './forms/situacion-laboral/situacion-laboral.component';
import { CabeceraDatosPersonalesComponent } from './cabecera-datos-personales/cabecera-datos-personales.component';
import { FechaService } from 'src/app/services/utils/fecha.service';
import { MenuItem, Message } from 'primeng/api';
import { DatosTicService } from 'src/app/services/datos-tic.service';
import { TrabajadoresService } from 'src/app/services/trabajadores.service';
import { Trabajador } from '../../interfaces/trabajador.interface';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [
    PrimeNgModule,
    DatosPersonalesComponent,
    DatosComunesComponent,
    PlantillasComponent,
    SituacionLaboralComponent,
    CabeceraDatosPersonalesComponent
],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.scss',
})
export class PersonalComponent implements OnInit {
  // region servicios y otras dependencias
  router = inject(Router);
  datosPersonalesService = inject(DatosPersonalesService);
  datosComunesService = inject(DatosComunesService);
  trabajadoresService = inject(TrabajadoresService);
  datosTicService = inject(DatosTicService);
  messageService = inject(CustomMessageService);
  fechaService = inject(FechaService);
  title = inject(Title);

  // #region variables

  /**
   * @variable urlState
   * @description Señal que se actualiza con los eventos de navegación del router.
   * Utiliza un filtro para capturar solo los eventos de tipo NavigationEnd.
   */
  urlState = toSignal(
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)),
  );

  /**
   * Computed signal property que obtiene el identificador de la persona (idPersona) desde la URL o el sessionStorage.
   *
   * - Si la URL contiene un segmento en la posición 3, se guarda en el sessionStorage y se retorna.
   * - Si no, se intenta obtener el idPersona desde el sessionStorage.
   *
   * @returns {number | string} El identificador de la persona.
   */
  idPersona = computed<number | string>(() => {
    if (!!this.urlState() && this.urlState()['url'].split('/')[3]) {
      sessionStorage.setItem('idPersona', this.urlState()['url'].split('/')[3]);
      return this.urlState()['url'].split('/')[3];
    } else if (this.router.url.split('/')[3]) {
      sessionStorage.setItem('idPersona', this.router.url.split('/')[3]);
      return this.router.url.split('/')[3];
    } else {
      return sessionStorage.getItem('idPersona');
    }
  });

  /**
   * Computa el número de página basado en el estado de la URL.
   *
   * @returns {number} El número de página determinado por la URL actual.
   *
   * - Si la URL contiene 'datos-personales', retorna 1.
   * - Si la URL contiene 'datos-laborales', retorna 2.
   * - Si la URL contiene 'situacion-laboral', retorna 3.
   * - En cualquier otro caso, retorna 4.
   *
   * La función primero verifica si `urlState` está disponible y utiliza su valor.
   * Si no, utiliza la URL del router.
   */
  page = computed<number>(() => {
    if (!!this.urlState()) {
      if (this.urlState()['url'].includes('datos-personales')) {
        this.title.setTitle(`RRHH - Datos Personales (${this.idPersona()})`);
        return 1;
      } else if (this.urlState()['url'].includes('datos-laborales')) {
        this.title.setTitle(`RRHH - Datos Laborales (${this.idPersona()})`);
        return 2;
      } else if (this.urlState()['url'].includes('situacion-laboral')) {
        this.title.setTitle(`RRHH - Situación Laboral (${this.idPersona()})`);
        return 3;
      } else {
        this.title.setTitle(`RRHH - Plantillas (${this.idPersona()})`);
        return 4;
      }
    }
    if (this.router.url.includes('datos-personales')) {
      this.title.setTitle(`RRHH - Datos Personales (${this.idPersona()})`);
      return 1;
    } else if (this.router.url.includes('datos-laborales')) {
      this.title.setTitle(`RRHH - Datos Laborales (${this.idPersona()})`);
      return 2;
    } else if (this.router.url.includes('situacion-laboral')) {
      this.title.setTitle(`RRHH - Situación Laboral (${this.idPersona()})`);
      return 3;
    } else {
      this.title.setTitle(`RRHH - Plantillas (${this.idPersona()})`);
      return 4;
    }
  });

  /**
   * Computed property que devuelve un título basado en la página actual.
   *
   * @returns {string} El título correspondiente a la página actual:
   * - 'Datos Personales' si la página es 1
   * - 'Datos Laborales' si la página es 2
   * - 'Situation Laboral' si la página es 3
   * - 'Plantillas' para cualquier otra página
   */
  titulo = computed<string>(() => {
    if (this.page() === 1) {
      return 'Datos Personales';
    } else if (this.page() === 2) {
      return 'Datos Laborales';
    } else if (this.page() === 3) {
      return 'Situation Laboral';
    } else {
      return 'Plantillas';
    }
  });

  datosPersonales = signal<DatosPersonales | null>(null);
  datosComunes = signal<DatosComunes | null>(null);
  situacionLaboral = signal<any>(null);
  submitLoading = signal<boolean>(false);
  bajaMedicaActual = signal<string | null>(null);
  mailCNB = signal<string>('');
  opciones = signal<MenuItem[]>([
    {
      label: 'Datos personales',
      icon: 'pi pi-user',
      command: () => {
        this.router.navigateByUrl(
          '/personal/datos-personales/' + this.idPersona()
        );
      },
    },
    {
      label: 'Datos Laborales',
      icon: 'pi pi-book',
      command: () => {
        this.router.navigateByUrl(
          '/personal/datos-comunes/' + this.idPersona()
        );
      },
    },
    {
      label: 'Situacion Laboral',
      icon: 'pi pi-briefcase',
      command: () => {
        this.router.navigateByUrl(
          '/personal/situacion-laboral/' + this.idPersona()
        );
      },
    },
    {
      label: 'Plantillas',
      icon: 'pi pi-file-export',
      command: () => {
        this.router.navigateByUrl(
          '/personal/plantillas/' + this.idPersona()
        );
      },
    },
    {
      label: 'Recargar',
      icon: 'pi pi-replay',
      command: () => {
        this.cargarDatos();
      },
    },
  ])

  loading = computed<boolean>(() => {
    return !!this.datosPersonales() || !!this.datosComunes();
  });

  hiddenTime: number | null = null;

  // #endregion

  // region constructor y efectos

  constructor() {
    effect(
      () => {
        // console.log('Se cargaran los datos de la persona', this.idPersona());
        this.cargarDatos();
      },
      { allowSignalWrites: true },
    );

    effect(() => {
      console.log('Cambiaron los datos personales', this.datosPersonales());
      console.log('------------------------');
    });
    effect(() => {
      console.log('Cambiaron los datos comunes', this.datosComunes());
      console.log('------------------------');
    });
    effect(() => {
      console.log('Cambiaron la situacion laboral', this.situacionLaboral());
      console.log('------------------------');
    });

    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  // #region metodos

  ngOnInit() {
    console.warn('Modulo de Personal');
  }

  cargarDatos() {
    this.cargarDatosPersonales();
    this.cargarDatosComunes();
    this.cargarSituacionLaboral();
    this.verficarBajaMedicaPresente();
  }

  cargarDatosPersonales() {
    this.datosPersonales.set(null);
    this.datosPersonalesService
      .get(this.idPersona() as number)
      .pipe(take(1))
      .subscribe({
        next: (datosPersonales) => {
          this.datosPersonales.set(datosPersonales);
          // console.log('Datos personales cargados', this.datosPersonales());
        },
        error: (error) => {
          console.error(error);
          this.messageService.error(
            error.error.message || error.message ||
              'Error desconocido al cargar los datos personales',
          );
        },
      });
  }

  cargarDatosComunes() {
    this.datosComunes.set(null);
    this.datosComunesService
      // ESTO FUNCIONA PQ EL ID DE LOS DATOS PERSONALES ES EL MISMO QUE EL DE LOS DATOS COMUNES
      .get(this.idPersona() as number)
      .pipe(take(1))
      .subscribe({
        next: (datosComunes) => {
          this.datosComunes.set(datosComunes);
          // console.log('Datos comunes cargados', this.datosComunes());
          this.cargarEmailCNB();
        },
        error: (error) => {
          console.error(error);
          this.messageService.error(
            error.error.message || error.message ||
              'Error desconocido al cargar los datos comunes',
          );
        },
      });
  }

  cargarSituacionLaboral() {
    this.trabajadoresService.getSituacionActualByIDPersona(this.idPersona() as number).subscribe({
      next: (trabajador) => {
        this.situacionLaboral.set(trabajador);
      },
      error: (error) => {
        console.error(error);
        this.messageService.error(
          error.error.message || error.message ||
            'Error desconocido al cargar la situación laboral',
        );
      },
    })
  } 

  verficarBajaMedicaPresente() {
    // this.loadingBajaMedica = true;
    this.datosPersonalesService
      .getBajaMedicaActual(this.idPersona())
      .subscribe({
        next: (res) => {
          console.log('Baja médica actual');
          console.log(res);
          if (res.isBajaMedica) {
            this.bajaMedicaActual.set(res.bajaMedica.fechaInicio);
          } else {
            this.bajaMedicaActual.set(null);
          }
          // this.loadingBajaMedica = false
        },
        error: (error) => {
          console.log(error);
          // this.loadingBajaMedica = false
        },
      });
  }

  cargarEmailCNB() {
    this.datosTicService.getEmailCNB(this.datosComunes().id).then((mail) => {
      this.mailCNB.set(mail);
    });
  }

  back() {
    let previousPersonalPage = sessionStorage.getItem('previousPersonalPage');

    if (previousPersonalPage) {
      this.router.navigateByUrl(previousPersonalPage);
    } else {
      this.router.navigate(['/']);
    }
  }

  handleVisibilityChange = () => {
    let diezMinutos = 10 * 60 * 1000; // 10 minutos
    
    if (document.hidden) {
      this.hiddenTime = Date.now();
    } else {
      if (this.hiddenTime && (Date.now() - this.hiddenTime >= diezMinutos)) {
        console.log('La pestaña estuvo oculta por 10 minutos o más');
        this.cargarDatos(); // Llama a tu método para recargar datos
      }
      this.hiddenTime = null;
    }
  }

  // #endregion
}
