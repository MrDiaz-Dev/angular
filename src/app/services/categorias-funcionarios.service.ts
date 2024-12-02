import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CategoriaFuncionario,
  CategoriaFuncionarioCreateDTO,
  CategoriaFuncionariosPostRespuesta,
  CategoriaFuncionariosRespuesta,
} from '../interfaces/categorias-funcionarios.interface';
import { CategoriasFuncionariosRespuesta } from '../interfaces/categoria-funcionario.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriasFuncionariosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  paginated(urlParams: string): Observable<CategoriasFuncionariosRespuesta> {
    const url = this.API_URL + `/categorias-trabajadores?${urlParams}`;
    return this.http.get<CategoriasFuncionariosRespuesta>(url);
  }

  getAll(): Observable<CategoriasFuncionariosRespuesta> {
    const url = this.API_URL + `/categorias-trabajadores?pagination=false&order[nombre]=asc`;
    return this.http.get<CategoriasFuncionariosRespuesta>(url);
  }

  getCategoriaFuncionariosFromPage(
    page: number
  ): Observable<CategoriaFuncionariosRespuesta> {
    const url =
      this.API_URL +
      `/categorias-trabajadores?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<CategoriaFuncionariosRespuesta>(url);
  }

  getCategoriaFuncionariosByID(id: number): Observable<CategoriaFuncionario> {
    const url = this.API_URL + `/categorias-trabajadores/${id}`;
    return this.http.get<CategoriaFuncionario>(url);
  }

  getCategoriaFuncionariosBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<CategoriaFuncionariosRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/categorias-trabajadores?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<CategoriaFuncionariosRespuesta>(url);
  }

  create(
    newCategoriaFuncionario: CategoriaFuncionarioCreateDTO
  ): Observable<CategoriaFuncionariosPostRespuesta> {
    const url = this.API_URL + `/categorias-trabajadores`;
    return this.http.post<CategoriaFuncionariosPostRespuesta>(
      url,
      newCategoriaFuncionario
    );
  }

  edit(
    ID: number,
    categoriaFuncionarioToEdit: CategoriaFuncionarioCreateDTO
  ): Observable<CategoriaFuncionariosRespuesta> {
    const url = this.API_URL + `/categorias-trabajadores/${ID}`;
    return this.http.put<CategoriaFuncionariosRespuesta>(
      url,
      categoriaFuncionarioToEdit
    );
  }

  delete(ID: number) {
    const url = this.API_URL + `/categorias-trabajadores/${ID}`;
    return this.http.delete<CategoriaFuncionariosRespuesta>(url);
  }

  deleteArray(IDs): Observable<CategoriaFuncionariosRespuesta> {
    const url = this.API_URL + `/categorias-trabajadores/delete-array`;
    return this.http.post<CategoriaFuncionariosRespuesta>(url, IDs);
  }
}
