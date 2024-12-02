import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  CategoriaEmpresa, 
  CategoriaEmpresaCreateDTO, 
  CategoriaEmpresasPostRespuesta, 
  CategoriaEmpresasRespuesta 
} from '../interfaces/categorias-empresas.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasEmpresasService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getCategoriaEmpresasFromPage(page: number): Observable<CategoriaEmpresasRespuesta> {
    const url =
      this.API_URL +
      `/categorias-empresas?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<CategoriaEmpresasRespuesta>(url);
  }

  getCategoriaEmpresasByID(id: number): Observable<CategoriaEmpresa> {
    const url = this.API_URL + `/categorias-empresas/${id}`;
    return this.http.get<CategoriaEmpresa>(url);
  }

  getCategoriaEmpresasBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<CategoriaEmpresasRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/categorias-empresas?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<CategoriaEmpresasRespuesta>(url);
  }

  create(
    newCategoriaEmpresa: CategoriaEmpresaCreateDTO
  ): Observable<CategoriaEmpresasPostRespuesta> {
    const url = this.API_URL + `/categorias-empresas`;
    return this.http.post<CategoriaEmpresasPostRespuesta>(url, newCategoriaEmpresa);
  }

  edit(
    ID: number,
    categoriaEmpresaToEdit: CategoriaEmpresaCreateDTO
  ): Observable<CategoriaEmpresasRespuesta> {
    const url = this.API_URL + `/categorias-empresas/${ID}`;
    return this.http.put<CategoriaEmpresasRespuesta>(url, categoriaEmpresaToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/categorias-empresas/${ID}`;
    return this.http.delete<CategoriaEmpresasRespuesta>(url);
  }
}
