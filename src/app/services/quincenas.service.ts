import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Quincena, QuincenaCreateDTO, QuincenaPostRespuesta, QuincenaRespuesta } from '../interfaces/quincenas.interface';

@Injectable({
  providedIn: 'root'
})
export class QuincenasService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }

  getQuincenaFromPage(page: number): Observable<QuincenaRespuesta> {
    const url =
      this.API_URL +
      `/quincenas?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<QuincenaRespuesta>(url);
  }

  getQuincenaByID(id: number): Observable<Quincena> {
    const url = this.API_URL + `/quincenas/${id}`;
    return this.http.get<Quincena>(url);
  }

  getQuincenaBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<QuincenaRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/quincenas?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<QuincenaRespuesta>(url);
  }

  create(
    newQuincena: QuincenaCreateDTO
  ): Observable<QuincenaPostRespuesta> {
    const url = this.API_URL + `/quincenas`;
    return this.http.post<QuincenaPostRespuesta>(url, newQuincena);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: QuincenaCreateDTO
  ): Observable<QuincenaRespuesta> {
    const url = this.API_URL + `/quincenas/${ID}`;
    return this.http.put<QuincenaRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/quincenas/${ID}`;
    return this.http.delete<QuincenaRespuesta>(url);
  }
}

