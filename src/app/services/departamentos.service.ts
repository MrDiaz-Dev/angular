import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  Departamento,
  DepartamentoCreateDTO,
  DepartamentoPostRespuesta,
  DepartamentosRespuesta,
} from '../interfaces/departamento.interface';

@Injectable({
  providedIn: 'root',
})
export class DepartamentosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Departamento> {
    const url = this.API_URL + `/departamentos/${id}`;
    return this.http.get<Departamento>(url);
  }

  getAll(): Observable<DepartamentosRespuesta> {
    const url = this.API_URL + `/departamentos?pagination=false&order[nombre]=asc`;
    return this.http.get<DepartamentosRespuesta>(url);
  }

  paginated(urlParams): Observable<DepartamentosRespuesta> {
    const url = this.API_URL + `/departamentos?${urlParams}`;
    return this.http.get<DepartamentosRespuesta>(url);
  }

  getDepartamentoFromPage(page: number): Observable<DepartamentosRespuesta> {
    const url =
      this.API_URL +
      `/departamentos?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<DepartamentosRespuesta>(url);
  }

  getDepartamentoByID(id: number): Observable<Departamento> {
    const url = this.API_URL + `/departamentos/${id}`;
    return this.http.get<Departamento>(url);
  }

  getDepartamentoBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<DepartamentosRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/departamentos?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<DepartamentosRespuesta>(url);
  }

  create(
    newDepartamento: DepartamentoCreateDTO
  ): Observable<DepartamentoPostRespuesta> {
    const url = this.API_URL + `/departamentos`;
    return this.http.post<DepartamentoPostRespuesta>(url, newDepartamento);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: DepartamentoCreateDTO
  ): Observable<DepartamentosRespuesta> {
    const url = this.API_URL + `/departamentos/${ID}`;
    return this.http.put<DepartamentosRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/departamentos/${ID}`;
    return this.http.delete<DepartamentosRespuesta>(url);
  }

  deleteArray(IDs: any): Observable<DepartamentosRespuesta> {
    const url = this.API_URL + `/departamentos/delete-array`;
    return this.http.post<DepartamentosRespuesta>(url, IDs);
  }
}
