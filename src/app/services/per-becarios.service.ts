import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import {
  PerBecario,
  PerBecariosRespuesta,
} from '../interfaces/per-becarios.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PerBecariosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  edit(id: number, becario: PerBecario): Observable<PerBecario> {
    const url = this.API_URL + `/per-trabajadores/${id}`;
    return this.http.put<PerBecario>(url, becario);
  }

  create(becario: PerBecario): Observable<any> {
    const url = this.API_URL + `/per-trabajadores`;
    return this.http.post(url, becario);
  }

  getBecario(id: number): Observable<PerBecario> {
    const url = this.API_URL + `/per-trabajadores/per-becarios/` + id;
    return this.http.get<PerBecario>(url);
  }

  getBusqueda(endpoint: string): Observable<PerBecariosRespuesta> {
    const url =
      this.API_URL +
      `/per-trabajadores/per-becarios` +
      endpoint +
      `&order[idPersona.apellido1]=asc&order[idPersona.apellido2]=asc&order[idPersona.nombre]=asc`;
    return this.http.get<PerBecariosRespuesta>(url);
  }

  getByIdPersona(idPersona: number): Observable<PerBecario> {
    const url = this.API_URL + `/per-trabajadores/per-becarios/id-persona/${idPersona}`;
    return this.http.get<PerBecario>(url);
  }

  getExcel(endpoint: string): Observable<PerBecariosRespuesta> {
    const url = this.API_URL + `/per-trabajadores/per-becarios/excel` + endpoint;
    return this.http.get<PerBecariosRespuesta>(url);
  }
}
