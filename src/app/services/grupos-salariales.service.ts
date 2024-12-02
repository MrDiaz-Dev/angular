import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {
  GrupoSalarial,
  GrupoSalarialCreateDTO,
  GrupoSalarialPostRespuesta,
  GruposSalarialesRespuesta,
} from '../interfaces/grupos-salariales.interface';

@Injectable({
  providedIn: 'root',
})
export class GruposSalarialesService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  paginated(urlParams: string): Observable<GruposSalarialesRespuesta> {
    const url = this.API_URL + `/grupos-salariales?${urlParams}`;
    return this.http.get<GruposSalarialesRespuesta>(url);
  }

  getById(id: number): Observable<GrupoSalarial> {
    const url = this.API_URL + `/grupos-salariales/${id}`;
    return this.http.get<GrupoSalarial>(url);
  }

  getAll(): Observable<GruposSalarialesRespuesta> {
    const url = this.API_URL + `/grupos-salariales?&pagination=false&order[nombre]=asc`;
    console.log('GRUPOS SALARIALES');
    console.log(url);
    return this.http.get<GruposSalarialesRespuesta>(url);
  }

  getAllByAreaFuncional(areaID: number): Observable<GruposSalarialesRespuesta> {
    const url = this.API_URL + `/grupos-salariales?&pagination=false&order[nombre]=asc&idArea=${areaID}`;
    console.log('GRUPOS SALARIALES BY AREA FUNCIONAL');
    console.log(url);
    return this.http.get<GruposSalarialesRespuesta>(url);
  }

  getFromPage(page: number): Observable<GruposSalarialesRespuesta> {
    const url =
      this.API_URL +
      `/grupos-salariales?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<GruposSalarialesRespuesta>(url);
  }

  getByID(id: number): Observable<GrupoSalarial> {
    const url = this.API_URL + `/grupos-salariales/${id}`;
    return this.http.get<GrupoSalarial>(url);
  }

  getBusqueda(
    page: number = 1,
    itemsPerPage: number = 10,
    endpoint: string = ''
  ): Observable<GruposSalarialesRespuesta> {
    const url = `${this.API_URL}/grupos-salariales?page=${page}&itemsPerPage=${itemsPerPage}${endpoint}`;
    return this.http.get<GruposSalarialesRespuesta>(url);
  }

  getGruposSalarialesBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<GruposSalarialesRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/grupos-salariales?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<GruposSalarialesRespuesta>(url);
  }

  getBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<GruposSalarialesRespuesta> {
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
      `/grupos-salariales?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<GruposSalarialesRespuesta>(url);
  }

  create(
    newSubredes: GrupoSalarialCreateDTO
  ): Observable<GrupoSalarialPostRespuesta> {
    const url = this.API_URL + `/grupos-salariales`;
    return this.http.post<GrupoSalarialPostRespuesta>(url, newSubredes);
  }

  edit(
    autTarjetaID: number,
    autTarjetaToEdit: GrupoSalarialCreateDTO
  ): Observable<GruposSalarialesRespuesta> {
    const url = this.API_URL + `/grupos-salariales/${autTarjetaID}`;
    return this.http.put<GruposSalarialesRespuesta>(url, autTarjetaToEdit);
  }

  delete(autTarjetaID: number) {
    const url = this.API_URL + `/grupos-salariales/${autTarjetaID}`;
    return this.http.delete<GruposSalarialesRespuesta>(url);
  }

  deleteArray(IDs): Observable<GruposSalarialesRespuesta> {
    const url = this.API_URL + `/grupos-salariales/delete-array`;
    return this.http.post<GruposSalarialesRespuesta>(url, IDs);
  }
}
