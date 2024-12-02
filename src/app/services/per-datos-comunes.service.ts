import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HistorialRespuesta } from '../interfaces/historial.interface';
import { PerDatosComunesResponsablesRespuesta } from '../interfaces/per-datos-comunes-responsables.interface';

import {
  PerDatosComunes,
  PerDatosComunesRepuesta,
} from '../interfaces/per-datos-comunes.interface';
import { PersonalModuleService } from 'src/app/modules/personal/services/personal-module.service';

@Injectable({
  providedIn: 'root',
})
export class PerDatosComunesService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient, private personalModuleService: PersonalModuleService) {}

  get(): Observable<PerDatosComunesRepuesta> {
    const url = this.API_URL + `/per-datos-comunes`;
    return this.http.get<PerDatosComunesRepuesta>(url);
  }

  getHistorial(idPersona: number): Observable<HistorialRespuesta> {
    const url = this.API_URL + `/per-datos-comunes/historial/${idPersona}?&order[fechaInicio]=desc`;
    return this.http.get<HistorialRespuesta>(url);
  }

  getByIdPersonal(id: number): Observable<PerDatosComunes> {
    const url = this.API_URL + `/per-datos-comunes/${id}`;
    return this.http.get<PerDatosComunes>(url);
  }

  edit(id: number, personal: PerDatosComunes): Observable<PerDatosComunes> {
    const url = this.API_URL + `/per-datos-comunes/${id}`;
    return this.http.put<PerDatosComunes>(url, personal);
  }

  create(personal: any): Observable<any> {
    const url = this.API_URL + `/per-datos-comunes`;
    return this.http.post(url, personal);
  }

  delete(personal: PerDatosComunes) {
    const url = this.API_URL + `/per-datos-comunes/` + personal.id;
    return this.http.delete(url);
  }

  getBusquedaResponsables(
    endpoint: string
  ): Observable<PerDatosComunesResponsablesRespuesta> {
    console.log('`/per-datos-comunes/responsables` + endpoint');
    console.log(`/per-datos-comunes/responsables` + endpoint);
    const url = this.API_URL + `/per-datos-comunes/responsables` + endpoint;
    return this.http.get<PerDatosComunesResponsablesRespuesta>(url);
  }

  getBusqueda(endpoint: string): Observable<PerDatosComunesRepuesta> {
    const url =
      this.API_URL +
      `/per-datos-comunes` +
      endpoint +
      `&order[idPersona.apellido1]=asc&order[idPersona.apellido2]=asc&order[idPersona.nombre]=asc`;
    return this.http.get<PerDatosComunesRepuesta>(url);
  }

  setTipoTrabajador(idPersona: number, tipo: number): Observable<PerDatosComunes> {
    const url =
      this.API_URL + `/per-datos-comunes/${idPersona}`;

    const body = {
      idTipo: `api/tipos-trabajadores/${tipo}`
    }
    return this.http.put<PerDatosComunes>(url, body);
  }

  resetTipoTrabajadorASinDefinir(idPersona: number) {
    const url =
      this.API_URL + `/per-datos-comunes/${idPersona}`;

    const body = {
      idTipo: `api/tipos-trabajadores/7`
    }
    let sub = this.http.put<PerDatosComunes>(url, body).subscribe({
      next: (response) => {
        console.log('se ha reseteado el tipo de trabajador a Sin definir');
        this.personalModuleService.setDatosLaborales(response);
      },
      complete: () => {
        sub.unsubscribe();
      }
    })
  }

  getDatosTic(idPersona: number): Observable<any> {
    const url = this.API_URL + `/datos-tics/${idPersona}`;
    return this.http.get(url);
  }
}
