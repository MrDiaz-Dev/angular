import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { PaisesRepuesta, Pais } from '../interfaces/p-dropdowns/pais.interface';
import { Paises, PaisesCreateDTO, PaisesPostRespuesta, PaisesRespuesta } from '../interfaces/paises.interface';


@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private API_URL= environment.API_URL;

  constructor( private http: HttpClient) {}

  get(): Observable<PaisesRepuesta> {
    const url = this.API_URL + `/paises`;
    return this.http.get<PaisesRepuesta>(url);
  }

  getAll(): Observable<PaisesRepuesta> {
    const url = this.API_URL + `/paises?pagination=false&order[nombre]=asc`;
    return this.http.get<PaisesRepuesta>(url);
  }

  paginated(urlParams: string): Observable<PaisesRespuesta> {
    const url = this.API_URL + `/paises?${urlParams}`;
    return this.http.get<PaisesRespuesta>(url);
  }

  getById( id: number): Observable<Pais> {
    const url = this.API_URL + `/paises/${id}`;
    return this.http.get<Pais>(url);
  }

  getPaisesFromPage(page: number): Observable<PaisesRespuesta> {
    const url =
      this.API_URL +
      `/paises?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<PaisesRespuesta>(url);
  }

  getPaisesByID(id: number): Observable<Pais> {
    const url = this.API_URL + `/paises/${id}`;
    return this.http.get<Pais>(url);
  }

  getPaisesBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<PaisesRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/paises?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<PaisesRespuesta>(url);
  }

  create(
    newPaises: PaisesCreateDTO
  ): Observable<PaisesPostRespuesta> {
    const url = this.API_URL + `/paises`;
    return this.http.post<PaisesPostRespuesta>(url, newPaises);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: PaisesCreateDTO
  ): Observable<PaisesRespuesta> {
    const url = this.API_URL + `/paises/${ID}`;
    return this.http.put<PaisesRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/paises/${ID}`;
    return this.http.delete<PaisesRespuesta>(url);
  }

  deleteArray(IDs: {data: number[]}) {
    const url = this.API_URL + `/paises/delete-array`;
    return this.http.post<PaisesRespuesta>(url, IDs);
  }
}
