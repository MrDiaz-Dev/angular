import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PerHonorarios, PerHonorariosRespuesta } from '../interfaces/per-honorarios.interface';


@Injectable({
  providedIn: 'root'
})
export class PerHonorariosService {

  private API_URL= environment.API_URL;

  constructor(private http: HttpClient) { }

  edit( id: number, data: PerHonorarios ): Observable<PerHonorarios>{
    const url = this.API_URL + `/per-trabajadores/${id}`;
    return this.http.put<PerHonorarios>(url, data);
  }

  getById( id: number): Observable<PerHonorarios> {
    const url = this.API_URL + `/per-trabajadores/per-honorarios/${id}`;
    return this.http.get<PerHonorarios>(url);
  }

  getBusqueda(endpoint: string): Observable<PerHonorariosRespuesta> {
    const url = this.API_URL + `/per-trabajadores/per-honorarios` + endpoint;
    return this.http.get<PerHonorariosRespuesta>(url);
  }

  create(data: PerHonorarios): Observable<any> {
    const url = this.API_URL + `/per-trabajadores`;
    return this.http.post(url, data);
  }

  getByIdPersona(idPersona: number): Observable<PerHonorarios> {
    const url = this.API_URL + `/per-trabajadores/per-honorarios/id-persona/${idPersona}`;
    return this.http.get<PerHonorarios>(url);
  }

}
