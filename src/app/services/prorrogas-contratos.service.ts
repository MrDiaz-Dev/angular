import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ProrrogasContratosRespuesta } from '../interfaces/prorrogas-contratos.interface';

@Injectable({
  providedIn: 'root',
})
export class ProrrogasContratosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getProrrogasContratos(
    endpoint: string
  ): Observable<ProrrogasContratosRespuesta> {
    const url = this.API_URL + `/asociacion-proyectos?` + endpoint;
    return this.http.get<ProrrogasContratosRespuesta>(url);
  }

  prorrogarContrato(formdata: any) {
    const url = this.API_URL + `/per-trabajadores/prorrogar`;
    return this.http.post(url, formdata);
  }
}
