import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  ConvocatoriaCreateDTO,
  Convocatoria,
  ConvocatoriaRespuesta,
  TipoConvocatoriaRespuesta,
} from '../interfaces/convocatorias.interface';

@Injectable({
  providedIn: 'root',
})
export class ConvocatoriasService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  
  getDropdown(): Observable<ConvocatoriaRespuesta> {
    const url = this.API_URL + `/convocatorias?pagination=false`;
    return this.http.get<ConvocatoriaRespuesta>(url);
  }
  
  getDropdownTipos(): Observable<TipoConvocatoriaRespuesta> {
    const url = this.API_URL + `/tipos-convocatorias?pagination=false`;
    return this.http.get<TipoConvocatoriaRespuesta>(url);
  }

  getBusqueda(endPoint: string): Observable<ConvocatoriaRespuesta> {
    const url = this.API_URL + `/convocatorias` + endPoint;
    return this.http.get<ConvocatoriaRespuesta>(url);
  }

  getConvocatoriaFromPage(page: number): Observable<ConvocatoriaRespuesta> {
    const url =
      this.API_URL +
      `/convocatorias?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<ConvocatoriaRespuesta>(url);
  }

  getConvocatoriaByID(id: number): Observable<Convocatoria> {
    const url = this.API_URL + `/convocatorias/${id}`;
    return this.http.get<Convocatoria>(url);
  }

  getConvocatoriaBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<Convocatoria> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/convocatorias?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<Convocatoria>(url);
  }

  setNewConvocatoria(
    newConvocatoria: ConvocatoriaCreateDTO
  ): Observable<Convocatoria> {
    const url = this.API_URL + `/convocatorias`;
    return this.http.post<Convocatoria>(url, newConvocatoria);
  }

  editConvocatoria(
    ID: number,
    categoriaEquipoToEdit: ConvocatoriaCreateDTO
  ): Observable<Convocatoria> {
    const url = this.API_URL + `/convocatorias/${ID}`;
    return this.http.put<Convocatoria>(url, categoriaEquipoToEdit);
  }

  deleteConvocatoria(ID: number) {
    const url = this.API_URL + `/convocatorias/${ID}`;
    return this.http.delete<Convocatoria>(url);
  }
}
