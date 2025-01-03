import { inject, Injectable, Signal, WritableSignal } from '@angular/core';
import { Pais, Titulacion } from '../layout/interfaces/entidades.interface';
import { PDropdown } from '../layout/interfaces/campo.interface';
import { PaisesService } from './paises.service';
import { HttpClient } from '@angular/common/http';
import { delay, take } from 'rxjs';
import { CustomMessageService } from './utils/message.service';
import { TitulacionesService } from './titulaciones.service';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  constructor() {}

  // #region servicios y otras dependencias

  http = inject(HttpClient);
  messageService = inject(CustomMessageService);
  paisesService = inject(PaisesService);
  titulacionesService = inject(TitulacionesService);

  // #endregion servicios y otras dependencias

  // #region entidades

  _paises: PDropdown[] = [];
  _titulaciones: PDropdown[] = [];

  // #endregion entidades

  // #region metodos

  // #region paises
  cargarPaises(): Promise<PDropdown[]> {
    return new Promise((resolve) => {
      this.paisesService
        .getAll()
        .pipe(take(1))
        .subscribe({
          next: (respuesta) => {
            let paises = respuesta['hydra:member'];
            this._paises = paises.map((pais: Pais) => {
              return {
                label: pais.nombre,
                value: pais.idPais,
              };
            });
            resolve(this._paises);
          },
          error: (error) => {
            console.error(error);
            this.messageService.error(
              error.error.message || error.message || 'Error desconocido al cargar los paises',
              'ERROR CON LOS PAISES',
            );
            resolve([]);
          },
        });
    });
  }

  get paises() {
    return this._paises;
  }

  setPaisesOnSignal(signal: WritableSignal<PDropdown[]>): void {
    this.setDataOnSignal(signal, '_paises', 'cargarPaises');
  }
  // #endregion paises

  // #region titulaciones

  cargarTitulaciones(): Promise<PDropdown[]> {
    return new Promise((resolve) => {
      this.titulacionesService
        .getAll()
        .pipe(take(1))
        .subscribe({
          next: (respuesta) => {
            let titulaciones = respuesta['hydra:member'];
            this._titulaciones = titulaciones.map((titulacion: Titulacion) => {
              return {
                label: titulacion.nombre,
                value: titulacion.id,
              };
            });
            resolve(this._titulaciones);
          },
          error: (error) => {
            console.error(error);
            this.messageService.error(
              error.error.message || error.message ||
                'Error desconocido al cargar las titulaciones',
              'ERROR CON LAS TITULACIONES',
            );
            resolve([]);
          }
        });
    });
  }

  get titulaciones() {
    return this._titulaciones;
  }

  setTitulacionesOnSignal(signal: WritableSignal<PDropdown[]>): void {
    this.setDataOnSignal(signal, '_titulaciones', 'cargarTitulaciones');
  }

  // --------------------------------------------------------------------------

  /**
   * Establece datos en una señal dada basada en el nombre de la entidad y el nombre del método proporcionados.
   * 
   * @param signal - Una señal escribible que se actualizará con los datos.
   * @param entityName - El nombre de la entidad cuyos datos se van a establecer.
   * @param methodName - El nombre del método que se llamará si los datos de la entidad están vacíos.
   * 
   * Si los datos de la entidad dada están vacíos, se llama al método especificado para obtener los datos,
   * que luego se establecen en la señal. Si los datos no están vacíos, se establecen directamente en la señal.
   * 
   * @returns void
   */
  setDataOnSignal(
    signal: WritableSignal<PDropdown[]>,
    entityName: string,
    methodName: string,
  ): void {
    if (this[entityName].length === 0) {
      this[methodName]().then((data) => {
        signal.set(data);
        // console.log(entityName, this[entityName]);
      });
    } else {
      signal.set(this[entityName]);
      // console.log(entityName, this[entityName]);
    }
  }

  // #region metodos
}
