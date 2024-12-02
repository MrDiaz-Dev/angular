import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Subredes,
  SubredesCreateDTO,
  SubredesPostRespuesta,
  SubredesRespuesta,
} from '../interfaces/subredes.interface';

@Injectable({
  providedIn: 'root',
})
export class SubredesService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getFromPage(page: number): Observable<SubredesRespuesta> {
    const url =
      this.API_URL + `/subredes?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<SubredesRespuesta>(url);
  }

  getByID(id: number): Observable<Subredes> {
    const url = this.API_URL + `/subredes/${id}`;
    return this.http.get<Subredes>(url);
  }

  getBusqueda(
    page: number = 1,
    itemsPerPage: number = 10,
    endpoint: string = ''
  ): Observable<SubredesRespuesta> {
    const url = `${this.API_URL}/subredes?page=${page}&itemsPerPage=${itemsPerPage}${endpoint}`;
    return this.http.get<SubredesRespuesta>(url);
  }

  getBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<SubredesRespuesta> {
    let toSearch: string;
    let dateAfterToSearch: string = '';
    let dateBeforeToSearch: string = '';

    if (campo === 'fechaInicio' || campo === 'fechaFin') {
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
      `/subredes?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<SubredesRespuesta>(url);
  }

  create(newSubredes: SubredesCreateDTO): Observable<SubredesPostRespuesta> {
    const url = this.API_URL + `/subredes`;
    return this.http.post<SubredesPostRespuesta>(url, newSubredes);
  }

  edit(
    autTarjetaID: number,
    autTarjetaToEdit: SubredesCreateDTO
  ): Observable<SubredesRespuesta> {
    const url = this.API_URL + `/subredes/${autTarjetaID}`;
    return this.http.put<SubredesRespuesta>(url, autTarjetaToEdit);
  }

  delete(autTarjetaID: number) {
    const url = this.API_URL + `/subredes/${autTarjetaID}`;
    return this.http.delete<SubredesRespuesta>(url);
  }
}
