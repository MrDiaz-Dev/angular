import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TrabEmpresa, TrabEmpresaRespuesta } from '../interfaces/trab-empresa.interface';


@Injectable({
  providedIn: 'root'
})
export class PerTrabEmpresaService {

  private API_URL= environment.API_URL;

  constructor(private http: HttpClient) { }

  edit( id: number, trab: TrabEmpresa ): Observable<TrabEmpresa>{
    const url = this.API_URL + `/per-trabajadores/${id}`;
    return this.http.put<TrabEmpresa>(url, trab);
  }

  getById( id: number): Observable<TrabEmpresa> {
    const url = this.API_URL + `/per-trabajadores/trab-empresas/${id}`;
    return this.http.get<TrabEmpresa>(url);
  }

  getBusqueda(endpoint: string): Observable<TrabEmpresaRespuesta> {
    const url = this.API_URL + `/per-trabajadores/trab-empresas` + endpoint;
    return this.http.get<TrabEmpresaRespuesta>(url);
  }

  getByIdPersona(idPersona: number): Observable<TrabEmpresa> {
    const url = this.API_URL + `/per-trabajadores/trab-empresas/id-persona/${idPersona}`;
    return this.http.get<TrabEmpresa>(url);
  }

  create(body): Observable<TrabEmpresa> {
    const url = this.API_URL + `/per-trabajadores`;
    return this.http.post<TrabEmpresa>(url, body);
  }

}
