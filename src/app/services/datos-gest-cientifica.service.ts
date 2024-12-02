import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DatosGestCientifica, DatosGestCientificaCreateDTO, DatosGestCientificaPostRespuesta, DatosGestCientificaRespuesta } from '../interfaces/datos-gest-cientifica.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosGestCientificaService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }

  getDatosGestCientificaFromPage(page: number): Observable<DatosGestCientificaRespuesta> {
    const url =
      this.API_URL +
      `/datos-gest-cientificas?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<DatosGestCientificaRespuesta>(url);
  }

  getDatosGestCientificaByID(id: number): Observable<DatosGestCientifica> {
    const url = this.API_URL + `/datos-gest-cientificas/${id}`;
    return this.http.get<DatosGestCientifica>(url);
  }

  getDatosGestCientificaBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<DatosGestCientificaRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/datos-gest-cientificas?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<DatosGestCientificaRespuesta>(url);
  }

  create(
    newDatosGestCientifica: DatosGestCientificaCreateDTO
  ): Observable<DatosGestCientificaPostRespuesta> {
    const url = this.API_URL + `/datos-gest-cientificas`;
    return this.http.post<DatosGestCientificaPostRespuesta>(url, newDatosGestCientifica);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: DatosGestCientificaCreateDTO
  ): Observable<DatosGestCientificaRespuesta> {
    const url = this.API_URL + `/datos-gest-cientificas/${ID}`;
    return this.http.put<DatosGestCientificaRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/datos-gest-cientificas/${ID}`;
    return this.http.delete<DatosGestCientificaRespuesta>(url);
  }

}
