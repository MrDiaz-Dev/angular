import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TiposPermisos2018Respuesta } from '../interfaces/tipos-permisos2018.interface';
import {
  TiposPermisos2018,
  TiposPermisos2018CreateDTO,
  TiposPermisos2018PostRespuesta,
} from '../interfaces/tipos-permisos2018.interface';

@Injectable({
  providedIn: 'root',
})
export class TiposPermisos2018Service {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAll(): Observable<TiposPermisos2018Respuesta> {
    const url = this.API_URL + `/tipos-permisos2018s?pagination=false&order[tipo]=asc`;
    return this.http.get<TiposPermisos2018Respuesta>(url);
  }

  getTiposPermisos2018FromPage(
    page: number
  ): Observable<TiposPermisos2018Respuesta> {
    const url =
      this.API_URL +
      `/tipos-permisos2018s?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<TiposPermisos2018Respuesta>(url);
  }

  getTiposPermisos2018ByID(id: number): Observable<TiposPermisos2018> {
    const url = this.API_URL + `/tipos-permisos2018s/${id}`;
    return this.http.get<TiposPermisos2018>(url);
  }

  getTiposPermisos2018By(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<TiposPermisos2018Respuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/tipos-permisos2018s?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<TiposPermisos2018Respuesta>(url);
  }

  create(
    newTiposPermisos2018: TiposPermisos2018CreateDTO
  ): Observable<TiposPermisos2018PostRespuesta> {
    const url = this.API_URL + `/tipos-permisos2018s`;
    return this.http.post<TiposPermisos2018PostRespuesta>(
      url,
      newTiposPermisos2018
    );
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: TiposPermisos2018CreateDTO
  ): Observable<TiposPermisos2018Respuesta> {
    const url = this.API_URL + `/tipos-permisos2018s/${ID}`;
    return this.http.put<TiposPermisos2018Respuesta>(
      url,
      categoriaEquipoToEdit
    );
  }

  delete(ID: number) {
    const url = this.API_URL + `/tipos-permisos2018s/${ID}`;
    return this.http.delete<TiposPermisos2018Respuesta>(url);
  }
}
