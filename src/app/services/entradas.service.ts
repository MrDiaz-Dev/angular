import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  Entrada,
  EntradaCreateDTO,
  EntradaPostRespuesta,
  EntradaRespuesta,
} from '../interfaces/entradas.interface';

@Injectable({
  providedIn: 'root',
})
export class EntradasService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getEntradaFromPage(page: number): Observable<EntradaRespuesta> {
    const url =
      this.API_URL + `/entradas?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<EntradaRespuesta>(url);
  }

  getEntradaByID(id: number): Observable<Entrada> {
    const url = this.API_URL + `/entradas/${id}`;
    return this.http.get<Entrada>(url);
  }

  getBusqueda(endpoint: string): Observable<EntradaRespuesta> {
    const url = this.API_URL + `/entradas` + endpoint;
    return this.http.get<EntradaRespuesta>(url);
  }

  getEntradaBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<EntradaRespuesta> {
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
      `/entradas?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<EntradaRespuesta>(url);
  }

  create(
    newEntrada: EntradaCreateDTO
  ): Observable<EntradaPostRespuesta> {
    const url = this.API_URL + `/entradas`;
    return this.http.post<EntradaPostRespuesta>(url, newEntrada);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: EntradaCreateDTO
  ): Observable<EntradaRespuesta> {
    const url = this.API_URL + `/entradas/${ID}`;
    return this.http.put<EntradaRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/entradas/${ID}`;
    return this.http.delete<EntradaRespuesta>(url);
  }

  getNumeroEntrada(): Observable<EntradaRespuesta> {
    const url =
      this.API_URL +
      `/entradas?page=1&itemsPerPage=1&properties[]=numero&order[numero]=desc`;
    return this.http.get<EntradaRespuesta>(url);
  }
}
