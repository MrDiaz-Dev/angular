import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AnteriorSiguienteRespuesta } from '../interfaces/datos-personales-ante-sigui.interface';
import {
  DatosPersonales,
  DatosPersonalesRepuesta,
} from '../interfaces/datos-personales.interface';

@Injectable({
  providedIn: 'root',
})
export class DatosPersonalesService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  paginated(urlParams: string): Observable<DatosPersonalesRepuesta> {
    const url = this.API_URL + `/datos-personales?` + urlParams;
    return this.http.get<DatosPersonalesRepuesta>(url);
  }

  get(): Observable<DatosPersonalesRepuesta> {
    const url = this.API_URL + `/datos-personales`;
    return this.http.get<DatosPersonalesRepuesta>(url);
  }

  getById(id: number): Observable<DatosPersonales> {
    const url = this.API_URL + `/datos-personales/${id}`;
    return this.http.get<DatosPersonales>(url);
  }

  edit(id: number, personal: DatosPersonales): Observable<DatosPersonales> {
    const url = this.API_URL + `/datos-personales/${id}`;
    // console.log('DATA', personal);
    return this.http.put<DatosPersonales>(url, personal);
  }

  create(personal: DatosPersonales) {
    const url = this.API_URL + `/datos-personales`;
    return this.http.post(url, personal);
  }

  delete(personal: DatosPersonales) {
    const url = this.API_URL + `/datos-personales/` + personal.id;
    return this.http.delete(url);
  }

  deleteArray(IDs): Observable<DatosPersonalesRepuesta> {
    const url = this.API_URL + `/datos-personales/delete-array`;
    return this.http.post<DatosPersonalesRepuesta>(url, IDs);
  }

  // getAnteriorSiguiente(): Observable<AnteriorSiguienteRespuesta>{
  //   const url = this.API_URL + `/datos-personales?pagination=false&order[apellido1]=asc&properties[]=id`;
  //   return this.http.get<AnteriorSiguienteRespuesta>(url);
  //   // http://rrhh.systemctl-service.com/api/datos-personales?pagination=false&order%5Bapellido1%5D=asc&properties%5B%5D=id&properties%5B%5D=apellido1
  // }
  // Buscador: bus-datos-personales-listado
  getBusqueda(endpoint: string): Observable<DatosPersonalesRepuesta> {
    const url =
      this.API_URL +
      `/datos-personales` +
      endpoint +
      `&order[apellido1]=asc&order[apellido2]=asc&order[nombre]=asc`;
    return this.http.get<DatosPersonalesRepuesta>(url);
  }

  getBajaMedicaActual(id: number | string): Observable<any> {
    const url = this.API_URL + `/datos-personales/baja-medica/${id}`;
    return this.http.get<any>(url);
  }

  getExcel(endpoint: string): Observable<DatosPersonalesRepuesta> {
    const url = this.API_URL + `/datos-personales/excel` + endpoint;
    return this.http.get<DatosPersonalesRepuesta>(url);
  }

  // Combo: tipoResponsableData
  getAll(): Observable<DatosPersonalesRepuesta> {
    const url =
      this.API_URL +
      `/datos-personales/select`;
    return this.http.get<DatosPersonalesRepuesta>(url);
  }

  getAllNomApells(
    nom: string,
    apel1: string,
    apel2: string
  ): Observable<DatosPersonalesRepuesta[]> {
    const url =
      this.API_URL +
      `/datos-personales?pagination=false&properties[]=nombre&properties[]=apellido1&properties[]=apellido2&nombre=${nom}&apellido1=${apel1}&apellido2=${apel2}`;
    return this.http.get<DatosPersonalesRepuesta[]>(url);
  }

  getByCampo(
    value: string,
    campo: string
  ): Observable<DatosPersonalesRepuesta[]> {
    const url =
      this.API_URL +
      `/datos-personales?pagination=false&properties[]=${campo}&${campo}=${value}`;
    return this.http.get<DatosPersonalesRepuesta[]>(url);
  }

  getImportesContrato(id): Observable<any> {
    const url = this.API_URL + `/per-trabajadores/salario/${id}`;
    return this.http.get<any>(url);
  }
}
