import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { DatosTicRespuesta, DatosTic } from '../interfaces/datos-tic.interface';


@Injectable({
  providedIn: 'root'
})
export class DatosTicService {
  
  private API_URL= environment.API_URL;
  
  constructor( private http: HttpClient) {}
  
  get(): Observable<DatosTicRespuesta> {
    const url = this.API_URL + `/datos-tics`;
    return this.http.get<DatosTicRespuesta>(url);
  }
  
  getById( id: number): Observable<DatosTic> {
    const url = this.API_URL + `/datos-tics/${id}`;
    return this.http.get<DatosTic>(url);
  }
  
  edit( id: number, datosTic: DatosTic ): Observable<DatosTic>{
    const url = this.API_URL + `/datos-tics/${id}`;
    return this.http.put<DatosTic>(url, datosTic);
  }
}