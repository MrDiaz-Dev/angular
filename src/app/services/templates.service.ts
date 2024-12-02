import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { DatosPersonales } from '../interfaces/datos-personales.interface';


@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  private API_URL= environment.API_URL;

  constructor( private http: HttpClient) {}

  getCesionDerechosTemplate (id: number): Observable<any> {
    const url = this.API_URL + `/cesion_derechos_template/${id}`;
    return this.http.get<any>(url);
  }
  
  getIdemnizacionTemplate (id: number): Observable<any> {
    const url = this.API_URL + `/calculo_indemnizacion_template/${id}`;
    return this.http.get<any>(url);
  }
  getIdemnizacionTemplate2 (id: number): Observable<any> {
    const url = this.API_URL + `/calculo_indemnizacion_template_2/${id}`;
    return this.http.get<any>(url);
  }
  
  getCalculoContratoTemplate (body): Observable<any> {
    const url = this.API_URL + `/coste-contrato`;
    return this.http.post<any>(url, body);
  }
  
  getPropuestaTramitacionTemplate (id: number): Observable<any> {
    const url = this.API_URL + `/propuesta_tramitacion_template/${id}`;
    return this.http.get<any>(url);
  }
  
  getSituacionTemplate (id: number): Observable<any> {
    const url = this.API_URL + `/situacion_template/${id}`;
    return this.http.get<any>(url);
  }
  
  getSolicitudPermisoTemplate (id: number): Observable<any> {
    const url = this.API_URL + `/solicitud_permiso_template/${id}`;
    return this.http.get<any>(url);
  }

}