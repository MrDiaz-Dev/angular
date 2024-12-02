import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {
  PerFuncionarios,
  PerFuncionariosRespuesta,
} from '../interfaces/per-funcionarios.interface';
import { PerFuncionariosComisionesRespuesta } from '../interfaces/per-funcionarios-comisiones.interface';

@Injectable({
  providedIn: 'root',
})
export class PerFuncionariosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  edit(id: number, funcionario: PerFuncionarios): Observable<PerFuncionarios> {
    const url = this.API_URL + `/per-trabajadores/${id}`;
    return this.http.put<PerFuncionarios>(url, funcionario);
  }

  create(funcionario: PerFuncionarios): Observable<any> {
    const url = this.API_URL + `/per-trabajadores`;
    return this.http.post(url, funcionario);
  }

  getFuncionarioId(id: number): Observable<PerFuncionarios> {
    const url = this.API_URL + `/per-trabajadores/per-funcionarios/` + id;
    return this.http.get<PerFuncionarios>(url);
  }

  getFuncionarioById(id: number): Observable<PerFuncionarios> {
    const url = this.API_URL + `/per-trabajadores/per-funcionarios/` + id;
    return this.http.get<PerFuncionarios>(url);
  }

  getFuncionario(endpoint: string): Observable<PerFuncionariosRespuesta> {
    const url = this.API_URL + `/per-trabajadores/per-funcionarios` + endpoint;
    return this.http.get<PerFuncionariosRespuesta>(url);
  }

  getByIdPersona(idPersona: number): Observable<PerFuncionarios> {
    const url =
      this.API_URL + `/per-trabajadores/per-funcionarios/id-persona/` + idPersona;
    return this.http.get<PerFuncionarios>(url);
  }

  getBusqueda(endpoint: string): Observable<PerFuncionariosRespuesta> {
    const url = this.API_URL + `/per-trabajadores/per-funcionarios` + endpoint;
    return this.http.get<PerFuncionariosRespuesta>(url);
  }

  getExcel(endpoint: string): Observable<PerFuncionariosRespuesta> {
    const url = this.API_URL + `/per-trabajadores/per-funcionarios/excel`
    return this.http.get<PerFuncionariosRespuesta>(url);
  }

  getFuncionariosComisiones(
    endpoint: string
  ): Observable<PerFuncionariosComisionesRespuesta> {
    console.log(endpoint);
    const url =
      this.API_URL +
      `/per-trabajadores/per-funcionarios/comisiones-servicio` +
      endpoint;
    return this.http.get<PerFuncionariosComisionesRespuesta>(url);
  }

  getResponsables(endpoint: string): Observable<PerFuncionariosRespuesta> {
    const url = this.API_URL + `/per-trabajadores/per-funcionarios` + endpoint;
    return this.http.get<PerFuncionariosRespuesta>(url);
  }
}
