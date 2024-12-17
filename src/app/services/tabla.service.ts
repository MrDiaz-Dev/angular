import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Table, TableLazyLoadEvent } from 'primeng/table';

@Injectable({
  providedIn: 'root',
})
export class TablaService {
  constructor() {}

  /**
   * Carga los datos del evento lazy load da la tabla de PrimeNG y genera la URL para el endpoint.
   *
   * @param {TableLazyLoadEvent} event - El evento de carga perezosa de la tabla que contiene información 
   * sobre la paginación, ordenación, etc.
   * @param {string} urlParams - Los parámetros de URL base.
   * @param {number} [totalItems] - El número total de elementos (opcional).
   * @returns {Object} - Un objeto que contiene la URL generada, el primer índice de la página,
   * el número de filas por página y el evento previo.
   */
  cargarTabla(
    event: TableLazyLoadEvent,
    urlParams: string,
    totalItems?: number,
  ): {
    url: string;
    first: number;
    rows: number;
    prevEvent?: TableLazyLoadEvent;
  } {
    console.log('event => ', event);
    console.log('urlParams => ', urlParams);

    let prevEvent: TableLazyLoadEvent = null;
    let url = urlParams;
    let first = 0;
    let rows = 10;
    let page = first / rows + 1;
    let additionalParams = new HttpParams()
      .set('page', page.toString())
      .set('itemsPerPage', rows.toString());

    if (event) {
      prevEvent = event;
      console.log('event => ', event);
      first = event?.first ? event?.first : 0;
      rows = event?.rows ? event?.rows : 10;
      page = first / rows + 1;
      additionalParams = new HttpParams()
        .set('page', page.toString())
        .set('itemsPerPage', rows.toString());

      if (event.sortField) {
        if (event.sortOrder == 1) {
          additionalParams = additionalParams.set(
            `order[${event.sortField}]`,
            'asc',
          );
        }

        if (event.sortOrder == -1) {
          additionalParams = additionalParams.set(
            `order[${event.sortField}]`,
            'desc',
          );
        }
      }
    }

    url = urlParams
      ? `${urlParams}&${additionalParams.toString()}`
      : `${additionalParams.toString()}`;

    return {
      url: url,
      first: first,
      rows: rows,
      prevEvent: prevEvent,
    };
  }

  /**
   * Limpia los datos de la tabla.
   *
   * @param {Table} tabla - La instancia de la tabla que se va a limpiar.
   */
  limpiarTabla(tabla: Table) {
    tabla.clear();
  }
}
