import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ProrrogaBecario, ProrrogasBecariosRespuesta } from '../interfaces/prorrogas-becarios.interface';


@Injectable({
  providedIn: 'root'
})
export class ProrrogasBecariosService {

  private API_URL= environment.API_URL;

  constructor( private http: HttpClient) {}


  getProrrogasBecarios(endpoint: string): Observable<ProrrogasBecariosRespuesta> {

    const url = this.API_URL + `/prorrogas-trabajadores?` + endpoint;
    return this.http.get<ProrrogasBecariosRespuesta>(url);

  }

  prorrogarBecario(formdata: ProrrogaBecario){

    const url = this.API_URL + `/per-trabajadores/prorrogar`;
    return this.http.post(url, formdata);

  }


}
