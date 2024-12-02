import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import {
  ComplementoSalarial,
  ComplementoSalarialCreateDTO,
  ComplementoSalarialPostRespuesta,
  ComplementoSalarialRespuesta,
} from '../interfaces/complemento-salarial.interface';
@Injectable({
  providedIn: 'root',
})
export class ComplementoSalarialService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAll(): Observable<ComplementoSalarialRespuesta> {
    const url = this.API_URL + `/complementos-salariales?pagination=false`;
    return this.http.get<ComplementoSalarialRespuesta>(url);
  }

  paginated(urlParams: string): Observable<ComplementoSalarialRespuesta> {
    const url = this.API_URL + `/complementos-salariales?${urlParams}`;
    return this.http.get<ComplementoSalarialRespuesta>(url);
  }

  getById(id: number): Observable<ComplementoSalarial> {
    const url = this.API_URL + `/complementos-salariales/${id}`;
    return this.http.get<ComplementoSalarial>(url);
  }

  getComplementosSalariales(): Observable<ComplementoSalarialRespuesta> {
    const url = this.API_URL + `/complementos-salariales`;
    return this.http.get<ComplementoSalarialRespuesta>(url);
  }

  getComplementoSalarialFromPage(page: number): Observable<ComplementoSalarialRespuesta> {
    const url =
      this.API_URL +
      `/complementos-salariales?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<ComplementoSalarialRespuesta>(url);
  }

  getComplementoSalarialByID(id: number): Observable<ComplementoSalarial> {
    const url = this.API_URL + `/complementos-salariales/${id}`;
    return this.http.get<ComplementoSalarial>(url);
  }

  getComplementoSalarialBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<ComplementoSalarialRespuesta> {
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
      `/complementos-salariales?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<ComplementoSalarialRespuesta>(url);
  }

  create(
    newComplementoSalarial: ComplementoSalarialCreateDTO
  ): Observable<ComplementoSalarialPostRespuesta> {
    const url = this.API_URL + `/complementos-salariales`;
    return this.http.post<ComplementoSalarialPostRespuesta>(url, newComplementoSalarial);
  }

  edit(
    autMicroID: number,
    autMicroToEdit: ComplementoSalarialCreateDTO
  ): Observable<ComplementoSalarialRespuesta> {
    const url = this.API_URL + `/complementos-salariales/${autMicroID}`;
    return this.http.put<ComplementoSalarialRespuesta>(url, autMicroToEdit);
  }

  delete(autMicroID: number) {
    const url = this.API_URL + `/complementos-salariales/${autMicroID}`;
    return this.http.delete<ComplementoSalarialRespuesta>(url);
  }

  deleteArray(IDs) {
    const url = this.API_URL + `/complementos-salariales/delete-array`;
    return this.http.post<ComplementoSalarialRespuesta>(url, IDs);
  }
}
