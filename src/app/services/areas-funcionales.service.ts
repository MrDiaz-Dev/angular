import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  AreaFuncional,
  AreaFuncionalCreateDTO,
  AreasFuncionalesPostRespuesta,
  AreasFuncionalesRespuesta,
} from '../interfaces/areas-funcionales.interface';

@Injectable({
  providedIn: 'root',
})
export class AreasFuncionalesService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<AreaFuncional> {
    const url = this.API_URL + `/areas-funcionales/${id}`;
    return this.http.get<AreaFuncional>(url);
  }

  getAll(): Observable<AreasFuncionalesRespuesta> {
    const url = this.API_URL + `/areas-funcionales?pagination=false&order[nombre]=asc`;
    return this.http.get<AreasFuncionalesRespuesta>(url);
  }

  paginated(urlParams: string): Observable<AreasFuncionalesRespuesta> {
    const url = this.API_URL + `/areas-funcionales?${urlParams}`;
    return this.http.get<AreasFuncionalesRespuesta>(url);
  }

  getAreasFuncionalesFromPage(
    page: number
  ): Observable<AreasFuncionalesRespuesta> {
    const url =
      this.API_URL +
      `/areas-funcionales?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<AreasFuncionalesRespuesta>(url);
  }

  getAreasFuncionalesByID(id: number): Observable<AreaFuncional> {
    const url = this.API_URL + `/areas-funcionales/${id}`;
    return this.http.get<AreaFuncional>(url);
  }

  getAreasFuncionalesBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<AreasFuncionalesRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/areas-funcionales?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<AreasFuncionalesRespuesta>(url);
  }

  create(
    newAreaFuncional: AreaFuncionalCreateDTO
  ): Observable<AreasFuncionalesPostRespuesta> {
    const url = this.API_URL + `/areas-funcionales`;
    return this.http.post<AreasFuncionalesPostRespuesta>(url, newAreaFuncional);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: AreaFuncionalCreateDTO
  ): Observable<AreasFuncionalesRespuesta> {
    const url = this.API_URL + `/areas-funcionales/${ID}`;
    return this.http.put<AreasFuncionalesRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/areas-funcionales/${ID}`;
    return this.http.delete<AreasFuncionalesRespuesta>(url);
  }

  deleteArray(IDs) {
    const url = this.API_URL + `/areas-funcionales/delete-array`;
    return this.http.post<AreasFuncionalesRespuesta>(url, IDs);
  }
}
