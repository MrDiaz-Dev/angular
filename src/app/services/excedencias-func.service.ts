import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {
  ExcedenciasFunc,
  ExcedenciasFuncRespuesta,
} from '../interfaces/excedencias-func.interface';

@Injectable({
  providedIn: 'root',
})
export class ExcedenciasFuncService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  edit(
    id: number,
    excedenciasFunc: ExcedenciasFunc
  ): Observable<ExcedenciasFunc> {
    const url = this.API_URL + `/excedencias-funcs/${id}`;
    return this.http.put<ExcedenciasFunc>(url, excedenciasFunc);
  }
  delete(id: number): Observable<ExcedenciasFunc> {
    const url = this.API_URL + `/excedencias-funcs/${id}`;
    return this.http.delete<ExcedenciasFunc>(url);
  }

  create(data: ExcedenciasFunc) {
    const url = this.API_URL + `/excedencias-funcs`;
    return this.http.post(url, data);
  }

  getExcedencias(endpoint: string): Observable<ExcedenciasFuncRespuesta> {
    const url = this.API_URL + `/excedencias-funcs` + endpoint;
    return this.http.get<ExcedenciasFuncRespuesta>(url);
  }

  getBusqueda(endpoint: string): Observable<ExcedenciasFuncRespuesta> {
    const url = this.API_URL + `/excedencias-funcs` + endpoint;
    return this.http.get<ExcedenciasFuncRespuesta>(url);
  }

  getNumeroExcedencia(idTrabajador): Observable<ExcedenciasFuncRespuesta> {
    const url =
      this.API_URL +
      `/excedencias-funcs?page=1&itemsPerPage=1&properties[]=numero&idTrabajador.id=${idTrabajador}&order[numero]=desc`;
    return this.http.get<ExcedenciasFuncRespuesta>(url);
  }
}
