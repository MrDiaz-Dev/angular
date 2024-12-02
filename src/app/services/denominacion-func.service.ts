import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  DenominacionFunc,
  DenominacionFuncCreateDTO,
  DenominacionFuncPostRespuesta,
  DenominacionFuncRespuesta,
} from '../interfaces/denominacion-func.interface';

@Injectable({
  providedIn: 'root',
})
export class DenominacionFuncService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  paginated(urlParams: string): Observable<DenominacionFuncRespuesta> {
    const url = this.API_URL + `/denominacion-funcs?${urlParams}`;
    return this.http.get<DenominacionFuncRespuesta>(url);
  }

  getAll(): Observable<DenominacionFuncRespuesta> {
    const url = this.API_URL + `/denominacion-funcs?pagination=false&order[nombre]=asc`;
    return this.http.get<DenominacionFuncRespuesta>(url);
  }

  getDenominacionFuncFromPage(
    page: number
  ): Observable<DenominacionFuncRespuesta> {
    const url =
      this.API_URL +
      `/denominacion-funcs?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<DenominacionFuncRespuesta>(url);
  }

  getDenominacionFuncByID(id: number): Observable<DenominacionFunc> {
    const url = this.API_URL + `/denominacion-funcs/${id}`;
    return this.http.get<DenominacionFunc>(url);
  }

  getDenominacionFuncBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<DenominacionFuncRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/denominacion-funcs?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<DenominacionFuncRespuesta>(url);
  }

  create(
    newDenominacionFunc: DenominacionFuncCreateDTO
  ): Observable<DenominacionFuncPostRespuesta> {
    const url = this.API_URL + `/denominacion-funcs`;
    return this.http.post<DenominacionFuncPostRespuesta>(
      url,
      newDenominacionFunc
    );
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: DenominacionFuncCreateDTO
  ): Observable<DenominacionFuncRespuesta> {
    const url = this.API_URL + `/denominacion-funcs/${ID}`;
    return this.http.put<DenominacionFuncRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/denominacion-funcs/${ID}`;
    return this.http.delete<DenominacionFuncRespuesta>(url);
  }

  deleteArray(IDs): Observable<DenominacionFuncRespuesta> {
    const url = this.API_URL + `/denominacion-funcs/delete-array`;
    return this.http.post<DenominacionFuncRespuesta>(url, IDs);
  }
}
