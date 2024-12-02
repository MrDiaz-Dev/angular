import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Divisas, DivisasCreateDTO, DivisasPostRespuesta, DivisasRespuesta } from '../interfaces/divisas.inteface';


@Injectable({
  providedIn: 'root'
})
export class DivisasService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }

  getDivisasFromPage(page: number): Observable<DivisasRespuesta> {
    const url =
      this.API_URL +
      `/divisas?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<DivisasRespuesta>(url);
  }

  getDivisasByID(id: number): Observable<Divisas> {
    const url = this.API_URL + `/divisas/${id}`;
    return this.http.get<Divisas>(url);
  }

  getDivisasBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<DivisasRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/divisas?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<DivisasRespuesta>(url);
  }

  create(
    newDivisas: DivisasCreateDTO
  ): Observable<DivisasPostRespuesta> {
    const url = this.API_URL + `/divisas`;
    return this.http.post<DivisasPostRespuesta>(url, newDivisas);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: DivisasCreateDTO
  ): Observable<DivisasRespuesta> {
    const url = this.API_URL + `/divisas/${ID}`;
    return this.http.put<DivisasRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/divisas/${ID}`;
    return this.http.delete<DivisasRespuesta>(url);
  }

}
