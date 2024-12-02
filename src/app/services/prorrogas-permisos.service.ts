import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ProrrogasPermisosRespuesta, ProrrogaPermiso } from '../interfaces/prorrogas-permisos.interface';


@Injectable({
  providedIn: 'root'
})
export class ProrrogasPermisosService {

  private API_URL= environment.API_URL;

  constructor( private http: HttpClient) {}


  getProrrogasPermisos(endpoint: string): Observable<ProrrogasPermisosRespuesta> {
    const url = this.API_URL + `/prorrogas-trabajadores` + endpoint;
    return this.http.get<ProrrogasPermisosRespuesta>(url);
  }

  prorrogarPermiso(formdata: ProrrogaPermiso){

    const url = this.API_URL + `/per-trabajadores/prorrogar`;
    return this.http.post(url, formdata);

  }

}
