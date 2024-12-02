import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  TiposConexiones,
  TiposConexionesCreateDTO,
  TiposConexionesPostRespuesta,
  TiposConexionesRespuesta,
} from '../interfaces/tipos-conexiones.interface';

@Injectable({
  providedIn: 'root',
})
export class TiposConexionesService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getTiposConexionesFromPage(
    page: number
  ): Observable<TiposConexionesRespuesta> {
    const url =
      this.API_URL +
      `/tipos-conexiones?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<TiposConexionesRespuesta>(url);
  }

  getTiposConexionesByID(id: number): Observable<TiposConexiones> {
    const url = this.API_URL + `/tipos-conexiones/${id}`;
    return this.http.get<TiposConexiones>(url);
  }

  getTiposConexionesBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<TiposConexionesRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/tipos-conexiones?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<TiposConexionesRespuesta>(url);
  }

  create(
    newTiposConexiones: TiposConexionesCreateDTO
  ): Observable<TiposConexionesPostRespuesta> {
    const url = this.API_URL + `/tipos-conexiones`;
    return this.http.post<TiposConexionesPostRespuesta>(
      url,
      newTiposConexiones
    );
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: TiposConexionesCreateDTO
  ): Observable<TiposConexionesRespuesta> {
    const url = this.API_URL + `/tipos-conexiones/${ID}`;
    return this.http.put<TiposConexionesRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/tipos-conexiones/${ID}`;
    return this.http.delete<TiposConexionesRespuesta>(url);
  }
}
