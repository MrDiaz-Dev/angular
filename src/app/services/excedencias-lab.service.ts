import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ExcedenciasLab, ExcedenciasLabRespuesta } from '../interfaces/excedencias-lab.interface';


@Injectable({
  providedIn: 'root'
})
export class ExcedenciasLabService {

  private API_URL= environment.API_URL;

  constructor(private http: HttpClient) { }

  edit( id: number, excedenciasLab: ExcedenciasLab ): Observable<ExcedenciasLab>{
    const url = this.API_URL + `/excedencias-labs/${id}`;
    return this.http.put<ExcedenciasLab>(url, excedenciasLab);
  }
  delete( id: number): Observable<ExcedenciasLab>{
    const url = this.API_URL + `/excedencias-labs/${id}`;
    return this.http.delete<ExcedenciasLab>(url);
  }

  getExcedencias(endpoint: string): Observable<ExcedenciasLabRespuesta> {
    const url = this.API_URL + `/excedencias-labs` + endpoint;
    return this.http.get<ExcedenciasLabRespuesta>(url);
  }

  getBusqueda(endpoint: string): Observable<ExcedenciasLabRespuesta> {
    const url = this.API_URL + `/excedencias-labs` + endpoint;
    return this.http.get<ExcedenciasLabRespuesta>(url);
  }

}
