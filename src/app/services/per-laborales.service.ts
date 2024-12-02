import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {
  PerLaborales,
  PerLaboralesRespuesta,
} from '../interfaces/per-laborales.interface';
import { PerLaboralesProrrogasRespuesta } from '../interfaces/per-laborales-prorrogas.interface';

@Injectable({
  providedIn: 'root',
})
export class PerLaboralesService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  edit(id: number, data: PerLaborales): Observable<PerLaborales> {
    const url = this.API_URL + `/per-trabajadores/${id}`;
    return this.http.put<PerLaborales>(url, data);
  }

  getBusquedaProrrogas(
    endpoint: string
  ): Observable<PerLaboralesProrrogasRespuesta> {
    const url =
      this.API_URL +
      `/per-trabajadores/per-laborales/prorroga-contrato` +
      endpoint;
    return this.http.get<PerLaboralesProrrogasRespuesta>(url);
  }

  getLaboral(id: number): Observable<PerLaborales> {
    const url = this.API_URL + `/per-trabajadores/per-laborales/` + id;
    return this.http.get<PerLaborales>(url);
  }

  getByIdPersona(idPersona: number): Observable<PerLaborales> {
    const url =
      this.API_URL + `/per-trabajadores/per-laborales/id-persona/` + idPersona;
    return this.http.get<PerLaborales>(url);
  }

  // Buscador: bus-per-laborales-listado.component
  getBusqueda(endpoint: string): Observable<PerLaboralesRespuesta> {
    const url =
      this.API_URL +
      `/per-trabajadores/per-laborales` +
      endpoint +
      `&order[idPersona.apellido1]=asc&order[idPersona.apellido2]=asc&order[idPersona.nombre]=asc`;
    return this.http.get<PerLaboralesRespuesta>(url);
  }

  getExcel(endpoint): Observable<PerLaboralesRespuesta> {
    const url =
      this.API_URL + `/per-trabajadores/per-laborales/excel` + endpoint;
    return this.http.get<PerLaboralesRespuesta>(url);
  }

  create(laboral: PerLaborales): Observable<any> {
    const url = this.API_URL + `/per-trabajadores`;
    return this.http.post(url, laboral);
  }
}
