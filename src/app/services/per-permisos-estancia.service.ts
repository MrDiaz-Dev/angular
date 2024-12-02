import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PerPermisosEstancia, PerPermisosEstanciaRespuesta } from '../interfaces/per-permisos-estancia.interface';


@Injectable({
  providedIn: 'root'
})
export class PerPermisosEstanciaService {

  private API_URL= environment.API_URL;

  constructor(private http: HttpClient) { }

  edit( id: number, data: PerPermisosEstancia ): Observable<PerPermisosEstancia>{
    const url = this.API_URL + `/per-trabajadores/${id}`;
    return this.http.put<PerPermisosEstancia>(url, data);
  }

  getPermisoEstancia(id: number): Observable<PerPermisosEstancia> {
    const url = this.API_URL + `/per-trabajadores/per-permisos-estancias/` + id;
    return this.http.get<PerPermisosEstancia>(url);
  }

  getBusqueda(endpoint: string): Observable<PerPermisosEstanciaRespuesta> {
    const url = this.API_URL + `/per-trabajadores/per-permisos-estancias` + endpoint;
    return this.http.get<PerPermisosEstanciaRespuesta>(url);
  }

  getByIdPersona(idPersona: number): Observable<PerPermisosEstancia> {
    const url = this.API_URL + `/per-trabajadores/per-permisos-estancias/id-persona/${idPersona}`;
    return this.http.get<PerPermisosEstancia>(url);
  }

  getExcel(endpoint: string): Observable<PerPermisosEstanciaRespuesta> {
    const url = this.API_URL + `/per-trabajadores/per-permisos-estancias/excel` + endpoint;
    return this.http.get<PerPermisosEstanciaRespuesta>(url);
  }
  
  create( permisoEstancia: PerPermisosEstancia ): Observable<any>{
    const url = this.API_URL + `/per-trabajadores`;
    return this.http.post(url, permisoEstancia);
  }

}
