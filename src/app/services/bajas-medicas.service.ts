import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import {
  BajasMedica,
  BajasMedicasRespuesta,
} from '../interfaces/bajas-medicas.interface';

@Injectable({
  providedIn: 'root',
})
export class BajasMedicasService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  edit(id: number, baja: BajasMedica): Observable<BajasMedica> {
    const url = this.API_URL + `/bajas-medicas/${id}`;
    return this.http.put<BajasMedica>(url, baja);
  }

  delete(id: number): Observable<BajasMedica> {
    const url = this.API_URL + `/bajas-medicas/${id}`;
    return this.http.delete<BajasMedica>(url);
  }

  create(data: BajasMedica) {
    const url = this.API_URL + `/bajas-medicas`;
    return this.http.post(url, data);
  }

  getById(id: number): Observable<BajasMedica> {
    const url = this.API_URL + `/bajas-medicas/${id}`;
    return this.http.get<BajasMedica>(url);
  }

  getBajasMedicas(endpoint: string): Observable<BajasMedicasRespuesta> {
    console.log(endpoint);
    const url = this.API_URL + `/bajas-medicas` + endpoint;
    return this.http.get<BajasMedicasRespuesta>(url);
  }

  getBajasMedicasByIDTrabajador(id: number): Observable<BajasMedicasRespuesta> {
    const url = this.API_URL + `/bajas-medicas?idNumEstado=${id}&order[fechaInicio]=desc`;
    return this.http.get<BajasMedicasRespuesta>(url);
  }

  // Buscador: bus-datos-personales-listado
  getBusqueda(endpoint: string): Observable<BajasMedicasRespuesta> {
    const url = this.API_URL + `/bajas-medicas` + endpoint;
    return this.http.get<BajasMedicasRespuesta>(url);
  }

  generarInformeBajasMedicas(body) {
    const url = this.API_URL + `/informe-bajas-medicas`;
    return this.http.post(url, body);
  }
}
