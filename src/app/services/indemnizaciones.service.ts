import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  Indemnizacion,
  IndemnizacionCreateDTO,
  IndemnizacionPostRespuesta,
  IndemnizacionRespuesta,
} from '../interfaces/indemnizaciones.interface';

@Injectable({
  providedIn: 'root',
})
export class IndemnizacionesService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  paginated(urlParams: string): Observable<IndemnizacionRespuesta> {
    const url = this.API_URL + `/indemnizaciones?${urlParams}`;
    return this.http.get<IndemnizacionRespuesta>(url);
  }

  getIndemnizacionFromPage(page: number): Observable<IndemnizacionRespuesta> {
    const url =
      this.API_URL +
      `/indemnizaciones?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<IndemnizacionRespuesta>(url);
  }

  getIndemnizacionByID(id: number): Observable<Indemnizacion> {
    const url = this.API_URL + `/indemnizaciones/${id}`;
    return this.http.get<Indemnizacion>(url);
  }

  getIndemnizacionBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<IndemnizacionRespuesta> {
    let toSearch: string;
    let dateAfterToSearch: string = '';
    let dateBeforeToSearch: string = '';

    if (campo === 'fechaVigor') {
      if (valueToSearch != '') {
        dateAfterToSearch = '&' + campo + '[after]=' + valueToSearch;
      }

      if (SecondValueforFecha != '') {
        dateBeforeToSearch = '&' + campo + '[before]=' + SecondValueforFecha;
      }
      toSearch = dateAfterToSearch + dateBeforeToSearch;
    } else {
      toSearch = '&' + campo + '=' + valueToSearch;
    }

    const url =
      this.API_URL +
      `/indemnizaciones?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<IndemnizacionRespuesta>(url);
  }

  create(
    newIndemnizacion: IndemnizacionCreateDTO
  ): Observable<IndemnizacionPostRespuesta> {
    const url = this.API_URL + `/indemnizaciones`;
    return this.http.post<IndemnizacionPostRespuesta>(url, newIndemnizacion);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: IndemnizacionCreateDTO
  ): Observable<IndemnizacionRespuesta> {
    const url = this.API_URL + `/indemnizaciones/${ID}`;
    return this.http.put<IndemnizacionRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/indemnizaciones/${ID}`;
    return this.http.delete<IndemnizacionRespuesta>(url);
  }

  deleteArray(IDs) {
    const url = this.API_URL + `/indemnizaciones/delete-array`;
    return this.http.post<IndemnizacionRespuesta>(url, IDs);
  }
}
