import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  CategoriaEquipo, 
  CategoriaEquipoCreateDTO, 
  CategoriaEquiposPostRespuesta, 
  CategoriaEquiposRespuesta 
} from '../interfaces/categorias-equipos.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasEquiposService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getCategoriaEquiposFromPage(page: number): Observable<CategoriaEquiposRespuesta> {
    const url =
      this.API_URL +
      `/categorias-equipos?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<CategoriaEquiposRespuesta>(url);
  }

  getCategoriaEquiposByID(id: number): Observable<CategoriaEquipo> {
    const url = this.API_URL + `/categorias-equipos/${id}`;
    return this.http.get<CategoriaEquipo>(url);
  }

  getCategoriaEquiposBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<CategoriaEquiposRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/categorias-equipos?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<CategoriaEquiposRespuesta>(url);
  }

  create(
    newCategoriaEquipo: CategoriaEquipoCreateDTO
  ): Observable<CategoriaEquiposPostRespuesta> {
    const url = this.API_URL + `/categorias-equipos`;
    return this.http.post<CategoriaEquiposPostRespuesta>(url, newCategoriaEquipo);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: CategoriaEquipoCreateDTO
  ): Observable<CategoriaEquiposRespuesta> {
    const url = this.API_URL + `/categorias-equipos/${ID}`;
    return this.http.put<CategoriaEquiposRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/categorias-equipos/${ID}`;
    return this.http.delete<CategoriaEquiposRespuesta>(url);
  }
}
