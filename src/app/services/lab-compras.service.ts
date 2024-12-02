import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LabCompras, LabComprasCreateDTO, LabComprasPostRespuesta, LabComprasRespuesta } from '../interfaces/lab-compras.interface';

@Injectable({
  providedIn: 'root'
})
export class LabComprasService {

  private API_URL= environment.API_URL;

  constructor(private http: HttpClient) { }

  getLabComprasFromPage(page: number): Observable<LabComprasRespuesta> {
    const url =
      this.API_URL +
      `/lab-compras?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<LabComprasRespuesta>(url);
  }

  getLabComprasByID(id: number): Observable<LabCompras> {
    const url = this.API_URL + `/lab-compras/${id}`;
    return this.http.get<LabCompras>(url);
  }

  getLabComprasBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<LabComprasRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/lab-compras?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<LabComprasRespuesta>(url);
  }

  createCompras(
    newLabCompras: LabComprasCreateDTO
  ): Observable<LabComprasPostRespuesta> {
    const url = this.API_URL + `/lab-compras`;
    return this.http.post<LabComprasPostRespuesta>(url, newLabCompras);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: LabComprasCreateDTO
  ): Observable<LabComprasRespuesta> {
    const url = this.API_URL + `/lab-compras/${ID}`;
    return this.http.put<LabComprasRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/lab-compras/${ID}`;
    return this.http.delete<LabComprasRespuesta>(url);
  }
}
