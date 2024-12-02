import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TitulacionRespuesta } from '../interfaces/titulaciones.interface';
import {
  Titulacion,
  TitulacionCreateDTO,
  TitulacionPostRespuesta,
} from '../interfaces/titulaciones.interface';

@Injectable({
  providedIn: 'root',
})
export class TitulacionesService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  paginated(urlParams: string): Observable<TitulacionRespuesta> {
    const url = this.API_URL + `/titulaciones?${urlParams}`;
    return this.http.get<TitulacionRespuesta>(url);
  }

  getTitulaciones(): Observable<TitulacionRespuesta> {
    const url = this.API_URL + `/titulaciones`;
    return this.http.get<TitulacionRespuesta>(url);
  }

  getTitulacionFromPage(page: number): Observable<TitulacionRespuesta> {
    const url =
      this.API_URL +
      `/titulaciones?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<TitulacionRespuesta>(url);
  }

  getAll(): Observable<TitulacionRespuesta> {
    const url = `${this.API_URL}/titulaciones?pagination=false`;
    return this.http.get<TitulacionRespuesta>(url);
  }

  getTitulacionByID(id: number): Observable<Titulacion> {
    const url = this.API_URL + `/titulaciones/${id}`;
    return this.http.get<Titulacion>(url);
  }

  getTitulacionBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<TitulacionRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/titulaciones?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<TitulacionRespuesta>(url);
  }

  create(
    newTitulacion: TitulacionCreateDTO
  ): Observable<TitulacionPostRespuesta> {
    const url = this.API_URL + `/titulaciones`;
    return this.http.post<TitulacionPostRespuesta>(url, newTitulacion);
  }

  edit(
    ID: any,
    categoriaEquipoToEdit: any
  ): Observable<TitulacionRespuesta> {
    const url = this.API_URL + `/titulaciones/${ID}`;
    return this.http.put<TitulacionRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/titulaciones/${ID}`;
    return this.http.delete<TitulacionRespuesta>(url);
  }

  deleteArray(IDs): Observable<TitulacionRespuesta> {
    const url = this.API_URL + `/titulaciones/delete-array`;
    return this.http.post<TitulacionRespuesta>(url, IDs);
  }
}
