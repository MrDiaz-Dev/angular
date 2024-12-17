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
import { TableLazyLoadEvent } from 'primeng/table';
import { TablaService } from 'src/app/services/tabla.service';

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
  router = inject(Router);
  messageService = inject(CustomMessageService);
  datosPersonalesService = inject(DatosPersonalesService);
  fechaService = inject(FechaService);
  tablaService = inject(TablaService);

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
    { field: 'dniNie', subField: null, header: 'DNI / NIE' },
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
   * Carga los datos de la tabla basándose en el evento de carga diferida de la tabla.
   * 
   * @param {TableLazyLoadEvent} [event=null] - El evento de carga diferida de la tabla. 
   * Si no se proporciona, se utiliza el evento anterior almacenado.
   * 
   * @remarks
   * Este método establece el estado de carga en verdadero, determina los parámetros de datos de 
   * la tabla utilizando el servicio `tablaService`, y luego actualiza las propiedades 
   * `url`, `first`, `rows` y `prevEvent` con los valores devueltos por el servicio.
   * Finalmente, llama al método `cargarDatos` después de un breve retraso.
   */
  cargarTabla(event: TableLazyLoadEvent = null) {

    this.loading.set(true);
    
    event = event ? event : this.prevEvent ? this.prevEvent : null;

    let tableDataParams = this.tablaService.cargarTabla(event, this.urlParams);

    this.url = tableDataParams.url;
    this.first = tableDataParams.first;
    this.rows = tableDataParams.rows;
    this.prevEvent = tableDataParams.prevEvent;

    console.log('this.url => ', this.url);

    setTimeout(() => {
      this.cargarDatos();
    });
  }

  /**
   * Método para cargar datos paginados desde el servicio de datos personales.
   * Utiliza los parámetros de URL almacenados en `this.url`.
   *
   * En caso de éxito, los datos recibidos se registran en la consola.
   * En caso de error, se registra el error en la consola y se muestra un mensaje de error al usuario.
   */
  cargarDatos() {
    this.datosPersonalesService.paginated(this.url).subscribe(
      (datos) => {
        this.data = datos['hydra:member'];
        this.totalItems = datos['hydra:totalItems'];
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
    console.log('urlParams => ', this.urlParams);
    sessionStorage.setItem('previousPersonalPage', '/busqueda/bus-reducida-listado?' + this.urlParams);
    this.router.navigate(['personal/datos-personales', personal.id]);
  }

  /**
   * Calcula y llena el array `itemsPerPageOptions` con opciones para el número de elementos por página.
   * 
   * Este método itera desde 10 hasta `totalItems` en incrementos de 10, agregando cada valor al array `itemsPerPageOptions`.
   * Finalmente, agrega el valor de `totalItems` al array.
   * 
   * @remarks
   * - El método asegura que las opciones estén en múltiplos de 10 hasta el número total de elementos.
   * - El valor de `totalItems` siempre se incluye como la última opción.
   */
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
