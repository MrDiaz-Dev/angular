import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {
  FuenteFinanciacion,
  FuenteFinanciacionCreateDTO,
  FuenteFinanciacionPostRespuesta,
  FuentesFinanciacionRespuesta,
} from '../interfaces/fuentes-financiacion.interface';

@Injectable({
  providedIn: 'root',
})
export class FuentesFinanciacionService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getById(id: any): Observable<FuenteFinanciacion> {
    const url = this.API_URL + `/fuentes-financiacions/${id}`;
    return this.http.get<FuenteFinanciacion>(url);
  }

  paginated(urlParams: string): Observable<FuentesFinanciacionRespuesta> {
    const url = this.API_URL + `/fuentes-financiacions?${urlParams}`;
    return this.http.get<FuentesFinanciacionRespuesta>(url);
  }

  getAll(): Observable<FuentesFinanciacionRespuesta> {
    const url = this.API_URL + `/fuentes-financiacions?&pagination=false&order[nombre]=asc`;
    return this.http.get<FuentesFinanciacionRespuesta>(url);
  }

  getFuentesFinanciacionFromPage(
    page: number
  ): Observable<FuentesFinanciacionRespuesta> {
    const url =
      this.API_URL +
      `/fuentes-financiacions?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<FuentesFinanciacionRespuesta>(url);
  }

  getFuentesFinanciacionByID(id: number): Observable<FuenteFinanciacion> {
    const url = this.API_URL + `/fuentes-financiacions/${id}`;
    return this.http.get<FuenteFinanciacion>(url);
  }

  getFuentesFinanciacionBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<FuentesFinanciacionRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/fuentes-financiacions?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<FuentesFinanciacionRespuesta>(url);
  }

  create(
    newFuenteFinanciacion: FuenteFinanciacionCreateDTO
  ): Observable<FuenteFinanciacionPostRespuesta> {
    const url = this.API_URL + `/fuentes-financiacions`;
    return this.http.post<FuenteFinanciacionPostRespuesta>(
      url,
      newFuenteFinanciacion
    );
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: FuenteFinanciacionCreateDTO
  ): Observable<FuentesFinanciacionRespuesta> {
    const url = this.API_URL + `/fuentes-financiacions/${ID}`;
    return this.http.put<FuentesFinanciacionRespuesta>(
      url,
      categoriaEquipoToEdit
    );
  }

  delete(ID: number) {
    const url = this.API_URL + `/fuentes-financiacions/${ID}`;
    return this.http.delete<FuentesFinanciacionRespuesta>(url);
  }

  deleteArray(IDs): Observable<FuentesFinanciacionRespuesta> {
    const url = this.API_URL + `/fuentes-financiacions/delete-array`;
    return this.http.post<FuentesFinanciacionRespuesta>(url, IDs);
  }
}
