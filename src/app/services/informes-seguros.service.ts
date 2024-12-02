import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { BajasMedica, BajasMedicasRespuesta } from '../interfaces/bajas-medicas.interface';

@Injectable({
  providedIn: 'root'
})
export class InformesSegurosService {

  private API_URL= environment.API_URL;

  constructor( private http: HttpClient) {}

  
  create(data: any ){
    const url = this.API_URL + `/informe-seguros-permisos-estancia`;
    return this.http.post(url, data);
  }

  generarInformeSegurosPermisosEstancia(body: any) {
    const url = this.API_URL + `/informe-seguros-permisos-estancia`;
    return this.http.post(url, body);
  }

  generarInformePermisosCsic(body: any) {
    const url = this.API_URL + `/informe-permisos-cisc`;
    return this.http.post(url, body);
  }
}
