import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CustomMessageService } from 'src/app/services/utils/message.service';
import { DatosPersonalesService } from 'src/app/services/datos-personales.service';
import { PrimeNgModule } from 'src/app/layout/shared/prime-ng/prime-ng.module';
import { DatosPersonales } from 'src/app/layout/interfaces/datos-personales.interface';
import { ca } from 'date-fns/locale';
import { Message } from 'primeng/api';
import { HttpParams } from '@angular/common/http';
import { Campo } from 'src/app/layout/interfaces/campo.interface';
import { FechaService } from 'src/app/services/utils/fecha.service';

@Component({
  selector: 'app-bus-reducida-listado',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './bus-reducida-listado.component.html',
  styleUrl: './bus-reducida-listado.component.scss',
})
export class BusReducidaListadoComponent {
  constructor() {}

  // region servicios y otras dependencias
  private router = inject(Router);
  private messageService = inject(CustomMessageService);
  private datosPersonalesService = inject(DatosPersonalesService);
  private fechaService = inject(FechaService);

  // region variables
  titulo = 'Resultado de la busqueda reducida';

  url = '';

  urlParams = '';

  data: DatosPersonales[] = [];

  loading = signal<boolean>(false);

  errores: Message[] = [];

  error404: Message[] = [{
    severity: 'info',
    detail: 'No se encontraron registros',
  }];

  totalItems!: number;
  first: number = 0;
  mostrarDel: number = 1;
  mostrarAl: number = 10;
  rows: number = 10;
  prevEvent: any = null;
  itemsPerPageOptions: number[] = [];

  cols: Campo[] = [
    { field: 'nombre', subField: null, header: 'Nombre', sorteable: true },
    {
      field: 'apellido1',
      subField: null,
      header: '1er. Apellido',
      sorteable: true,
    },
    {
      field: 'apellido2',
      subField: null,
      header: '2do. Apellido',
      sorteable: true,
    },
    { field: 'dniNie', subField: null, header: 'DNI / NIE', sorteable: true },
    { field: 'dniNie', subField: null, header: 'DNI / NIE', sorteable: false },
    { field: '', header: 'Acciones' },
  ];

  // region metodos

  ngOnInit() {
    console.warn('Busqueda reducida listado');

    this.urlParams = this.router.url.split('?')[1] ?? '';
  }

  back() {
    this.router.navigate(['/busqueda/bus-reducida']);
  }

  /**
   * Prapar la carga datos para el componente, incluyendo la gestión de paginación,
   * ordenación y filtrado.
   *
   * @param event - Parámetro opcional que contiene información de paginación, ordenación y filtrado.
   *                - `first`: El índice del primer elemento a mostrar.
   *                - `rows`: El número de filas por página.
   *                - `filters`: Un objeto que contiene los criterios de filtrado.
   *                - `sortField`: El campo por el cual ordenar los datos.
   *                - `sortOrder`: El orden en el cual ordenar los datos
   *                  (1 para ascendente, -1 para descendente).
   *
   * Este método construye los parámetros de consulta necesarios basados en el objeto event
   * proporcionado, establece el estado de carga a true y llama al método `cargarDatos`
   * para obtener los datos.
   * También maneja la construcción de los parámetros de filtro y ordenación.
   *
   * @returns void
   */
  cargarTabla(event: any = null) {
    console.log('event => ', event);

    this.loading.set(true);

    this.first = 0;
    this.rows = 10;
    let page = this.first / this.rows + 1;
    let additionalParams = new HttpParams()
      .set('page', page.toString())
      .set('itemsPerPage', this.rows.toString());

    event = event ? event : this.prevEvent ? this.prevEvent : null;

    if (event) {
      this.prevEvent = event;
      console.log('event => ', event);
      this.loading.set(true);
      this.first = event?.first ? event?.first : 0;
      this.rows = event?.rows ? event?.rows : 10;
      page = this.first / this.rows + 1;
      additionalParams = additionalParams
        .set('page', page.toString())
        .set('itemsPerPage', this.rows.toString());

      if (event.sortField) {
        additionalParams = additionalParams.set('order_name', event.sortField);

        if (event.sortOrder == 1) {
          additionalParams = additionalParams.set('order_type', 'ASC');
        }

        if (event.sortOrder == -1) {
          additionalParams = additionalParams.set('order_type', 'DESC');
        }
      }
    }

    this.url = additionalParams.toString();
    console.log('this.url => ', this.url);

    setTimeout(() => {
      this.cargarDatos();
    });
  }

  /**
   * Método para cargar datos paginados desde el servicio de datos personales.
   * Utiliza los parámetros de URL almacenados en `this.urlParams`.
   *
   * En caso de éxito, los datos recibidos se registran en la consola.
   * En caso de error, se registra el error en la consola y se muestra un mensaje de error al usuario.
   */
  cargarDatos() {
    this.datosPersonalesService.paginated(this.urlParams).subscribe(
      (datos) => {
        this.data = datos['hydra:member'];
        this.totalItems = this.data.length;
        this.mostrarDel = this.first + 1;
        this.mostrarAl = this.mostrarDel + this.rows - 1;
        if (this.mostrarAl > this.totalItems) {
          this.mostrarAl = this.totalItems;
        }

        this.data.forEach((item) => {
          this.cols.forEach((col) => {
            if (col.type == 'date') {
              item[col.field] = this.fechaService.fechaAbsoluta(
                item[col.field],
              );
            }
          });
        });

        this.calcItemsPerPageOptions();

        this.loading.set(false);
      },
      (error) => {
        console.error(error);
        this.messageService.error(
          error.error.message ?? 'Error desconocido al cargar los datos',
        );
      },
    );
  }

  navegarAlDetalle(personal: DatosPersonales) {
    this.router.navigate(['personal/datos-personales', personal.id]);
  }

  calcItemsPerPageOptions() {
    for (let i = 10; i < this.totalItems; i = i + 10) {
      if (i < this.totalItems) this.itemsPerPageOptions.push(i);
    }
    this.itemsPerPageOptions.push(this.totalItems);
  }

  ngOnDestroy() {
    console.warn('Busqueda reducida listado destruido');
  }
}
