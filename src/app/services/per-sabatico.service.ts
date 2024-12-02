import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { PerSabatico, PerSabaticoRespuesta } from '../interfaces/per-sabatico.interface';


@Injectable({
  providedIn: 'root'
})
export class PerSabaticoService {

  private API_URL= environment.API_URL;

  constructor(private http: HttpClient) { }

  getSabaticoById(id: number): Observable<PerSabatico> {  
    const url = this.API_URL + `/per-trabajadores/per-sabaticos/${id}`;
    return this.http.get<PerSabatico>(url);
  }

  create(data: PerSabatico): Observable<any> {
    const url = this.API_URL + `/per-trabajadores`;
    return this.http.post<any>(url, data);
  }

  getByIdPersona(idPersona: number): Observable<PerSabatico> {
    const url = this.API_URL + `/per-trabajadores/per-sabaticos/id-persona/${idPersona}`;
    return this.http.get<PerSabatico>(url);
  }

  edit(id: number, data: PerSabatico): Observable<PerSabatico> {
    const url = this.API_URL + `/per-trabajadores/${id}`;
    return this.http.put<PerSabatico>(url, data);
  }

   // Buscador: bus-per-laborales-listado.component
   getBusqueda(endpoint: string): Observable<PerSabaticoRespuesta> {
    const url = this.API_URL + `/per-trabajadores/per-sabaticos` + endpoint;
    return this.http.get<PerSabaticoRespuesta>(url);
  }
}
