import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  TiposPermisos,
  TiposPermisosCreateDTO,
  TiposPermisosPostRespuesta,
  TiposPermisosRespuesta,
} from '../interfaces/tipos-permisos.interface';

@Injectable({
  providedIn: 'root',
})
export class TiposPermisosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  paginated(urlParams: string): Observable<TiposPermisosRespuesta> {
    const url = this.API_URL + `/tipos-permisos?${urlParams}`;
    return this.http.get<TiposPermisosRespuesta>(url);
  }

  getAll(): Observable<TiposPermisosRespuesta> {
    const url = this.API_URL + `/tipos-permisos?pagination=false&order[tipo]=asc`;
    return this.http.get<TiposPermisosRespuesta>(url);
  }

  getTiposPermisosFromPage(page: number): Observable<TiposPermisosRespuesta> {
    const url =
      this.API_URL +
      `/tipos-permisos?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<TiposPermisosRespuesta>(url);
  }

  getTiposPermisosByID(id: number): Observable<TiposPermisos> {
    const url = this.API_URL + `/tipos-permisos/${id}`;
    return this.http.get<TiposPermisos>(url);
  }

  getTiposPermisosBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<TiposPermisosRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/tipos-permisos?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<TiposPermisosRespuesta>(url);
  }

  create(
    newTiposPermisos: TiposPermisosCreateDTO
  ): Observable<TiposPermisosPostRespuesta> {
    const url = this.API_URL + `/tipos-permisos`;
    return this.http.post<TiposPermisosPostRespuesta>(url, newTiposPermisos);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: TiposPermisosCreateDTO
  ): Observable<TiposPermisosRespuesta> {
    const url = this.API_URL + `/tipos-permisos/${ID}`;
    return this.http.put<TiposPermisosRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/tipos-permisos/${ID}`;
    return this.http.delete<TiposPermisosRespuesta>(url);
  }

  deleteArray(IDs): Observable<TiposPermisosRespuesta> {
    const url = this.API_URL + `/tipos-permisos/delete-array`;
    return this.http.post<TiposPermisosRespuesta>(url, IDs);
  }
}
