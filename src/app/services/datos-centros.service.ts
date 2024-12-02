import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatosCentro, DatosCentroCreateDTO, DatosCentroPostRespuesta, DatosCentroRespuesta } from '../interfaces/datos-centros.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosCentrosService {

  private API_URL= environment.API_URL;

  constructor( private http: HttpClient) {}

  get(): Observable<DatosCentroRespuesta> {
    const url = this.API_URL + `/datos-centros`;
    return this.http.get<DatosCentroRespuesta>(url);
  }

  getById( id: number): Observable<DatosCentro> {
    const url = this.API_URL + `/datos-centros/${id}`;
    return this.http.get<DatosCentro>(url);
  }

  getDatosCentroFromPage(page: number): Observable<DatosCentroRespuesta> {
    const url =
      this.API_URL +
      `/datos-centros?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<DatosCentroRespuesta>(url);
  }

  getDatosCentroByID(id: number): Observable<DatosCentro> {
    const url = this.API_URL + `/datos-centros/${id}`;
    return this.http.get<DatosCentro>(url);
  }

  getDatosCentroBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<DatosCentroRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/datos-centros?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<DatosCentroRespuesta>(url);
  }

  create(
    newDatosCentro: DatosCentroCreateDTO
  ): Observable<DatosCentroPostRespuesta> {
    const url = this.API_URL + `/datos-centros`;
    return this.http.post<DatosCentroPostRespuesta>(url, newDatosCentro);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: DatosCentroCreateDTO
  ): Observable<DatosCentroRespuesta> {
    const url = this.API_URL + `/datos-centros/${ID}`;
    return this.http.put<DatosCentroRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/datos-centros/${ID}`;
    return this.http.delete<DatosCentroRespuesta>(url);
  }
}

