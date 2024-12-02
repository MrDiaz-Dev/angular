import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { RegistroSalidaRespuesta, RegistroSalida } from '../interfaces/registro-salida.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistroSalidaService {

  private API_URL= environment.API_URL;

  constructor( private http: HttpClient) {}

  getRegistrosSalida(endpoint: string): Observable<RegistroSalidaRespuesta> {
    const url = this.API_URL + `/registro-salidas/` + endpoint;
    return this.http.get<RegistroSalidaRespuesta>(url);
  }

  getById(id: number): Observable<RegistroSalida> {
    const url = this.API_URL + `/registro-salidas/` + id;
    return this.http.get<RegistroSalida>(url);
  }
  
  postRegistroSalida(): Observable<any> {
    const url = this.API_URL + `/registro-salidas`;
    return this.http.post(url,{});
  }
}
