import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { EmpresasIngreso, EmpresasIngresoCreateDTO, EmpresasIngresoPostRespuesta, EmpresasIngresoRespuesta } from '../interfaces/empresas-ingresos.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpresasIngresosService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }

  getEmpresasIngresoFromPage(page: number): Observable<EmpresasIngresoRespuesta> {
    const url =
      this.API_URL +
      `/empresas-ingresos?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<EmpresasIngresoRespuesta>(url);
  }

  getEmpresasIngresoByID(id: number): Observable<EmpresasIngreso> {
    const url = this.API_URL + `/empresas-ingresos/${id}`;
    return this.http.get<EmpresasIngreso>(url);
  }

  getEmpresasIngresoBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<EmpresasIngresoRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/empresas-ingresos?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<EmpresasIngresoRespuesta>(url);
  }

  create(
    newEmpresasIngreso: EmpresasIngresoCreateDTO
  ): Observable<EmpresasIngresoPostRespuesta> {
    const url = this.API_URL + `/empresas-ingresos`;
    return this.http.post<EmpresasIngresoPostRespuesta>(url, newEmpresasIngreso);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: EmpresasIngresoCreateDTO
  ): Observable<EmpresasIngresoRespuesta> {
    const url = this.API_URL + `/empresas-ingresos/${ID}`;
    return this.http.put<EmpresasIngresoRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/empresas-ingresos/${ID}`;
    return this.http.delete<EmpresasIngresoRespuesta>(url);
  }

}
