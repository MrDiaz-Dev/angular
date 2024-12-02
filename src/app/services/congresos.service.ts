import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Congreso, CongresoCreateDTO, CongresoPostRespuesta, CongresoRespuesta } from '../interfaces/congresos.interface';

@Injectable({
  providedIn: 'root'
})
export class CongresosService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }

  getCongresoFromPage(page: number): Observable<CongresoRespuesta> {
    const url =
      this.API_URL +
      `/congresos?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<CongresoRespuesta>(url);
  }

  getCongresoByID(id: number): Observable<Congreso> {
    const url = this.API_URL + `/congresos/${id}`;
    return this.http.get<Congreso>(url);
  }

  getCongresoBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<CongresoRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/congresos?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<CongresoRespuesta>(url);
  }

  create(
    newCongreso: CongresoCreateDTO
  ): Observable<CongresoPostRespuesta> {
    const url = this.API_URL + `/congresos`;
    return this.http.post<CongresoPostRespuesta>(url, newCongreso);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: CongresoCreateDTO
  ): Observable<CongresoRespuesta> {
    const url = this.API_URL + `/congresos/${ID}`;
    return this.http.put<CongresoRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/congresos/${ID}`;
    return this.http.delete<CongresoRespuesta>(url);
  }

}

