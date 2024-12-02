import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  Salida,
  SalidaCreateDTO,
  SalidaPostRespuesta,
  SalidaRespuesta,
} from '../interfaces/salidas.interface';

@Injectable({
  providedIn: 'root',
})
export class SalidasService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getSalidaFromPage(page: number): Observable<SalidaRespuesta> {
    const url =
      this.API_URL + `/salidas?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<SalidaRespuesta>(url);
  }

  getSalidaByID(id: number): Observable<Salida> {
    const url = this.API_URL + `/salidas/${id}`;
    return this.http.get<Salida>(url);
  }

  getBusqueda(endpoint: string): Observable<SalidaRespuesta> {
    const url = this.API_URL + `/salidas` + endpoint;
    return this.http.get<SalidaRespuesta>(url);
  }

  getSalidaBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<SalidaRespuesta> {
    let toSearch: string;
    let dateAfterToSearch: string = '';
    let dateBeforeToSearch: string = '';

    if (campo === 'fecha') {
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
      `/salidas?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<SalidaRespuesta>(url);
  }

  create(
    newSalida: SalidaCreateDTO
  ): Observable<SalidaPostRespuesta> {
    const url = this.API_URL + `/salidas`;
    return this.http.post<SalidaPostRespuesta>(url, newSalida);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: SalidaCreateDTO
  ): Observable<SalidaRespuesta> {
    const url = this.API_URL + `/salidas/${ID}`;
    return this.http.put<SalidaRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/salidas/${ID}`;
    return this.http.delete<SalidaRespuesta>(url);
  }

  getNumeroSalida(): Observable<SalidaRespuesta> {
    const url =
      this.API_URL +
      `/salidas/numero`;
    return this.http.get<SalidaRespuesta>(url);
  }
}
