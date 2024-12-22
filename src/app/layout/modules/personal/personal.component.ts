import { CommonModule } from '@angular/common';
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
import { PlantillasComponent } from "./plantillas/plantillas.component";
import { SituacionLaboralComponent } from "./forms/situacion-laboral/situacion-laboral.component";

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNgModule,
    DatosPersonalesComponent,
    DatosComunesComponent,
    PlantillasComponent,
    SituacionLaboralComponent
],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.scss',
})
export class PersonalComponent implements OnInit {
  // region servicios y otras dependencias
  router = inject(Router);
  datosPersonalesService = inject(DatosPersonalesService);
  datosComunesService = inject(DatosComunesService);
  messageService = inject(CustomMessageService);
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

  loading = computed<boolean>(() => {
    return !!this.datosPersonales() || !!this.datosComunes();
  });

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
    
    effect(
      () => {
        console.warn('Cambiaron los datos personales', this.datosPersonales());
      }
    );
    effect(
      () => {
        console.warn('Cambiaron los datos comunes', this.datosComunes());
      }
    );
    effect(
      () => {
        console.warn('Cambiaron la situacion laboral', this.situacionLaboral());
      }
    );
  }

  // #region metodos

  ngOnInit() {
    console.warn('Modulo de Personal');
  }

  cargarDatos() {
    this.cargarDatosPersonales();
    this.cargarDatosComunes();
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
            error.error.message ??
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
        },
        error: (error) => {
          console.error(error);
          this.messageService.error(
            error.error.message ??
              'Error desconocido al cargar los datos comunes',
          );
        },
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

  // #endregion
}
