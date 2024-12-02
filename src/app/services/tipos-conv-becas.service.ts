import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TiposConvBeca, TiposConvBecaCreateDTO, TiposConvBecaPostRespuesta, TiposConvBecaRespuesta } from '../interfaces/tipos-conv-becas.interface';

@Injectable({
  providedIn: 'root'
})
export class TiposConvBecasService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }

  getTiposConvBecaFromPage(page: number): Observable<TiposConvBecaRespuesta> {
    const url =
      this.API_URL +
      `/tipos-conv-becas?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<TiposConvBecaRespuesta>(url);
  }

  getTiposConvBecaByID(id: number): Observable<TiposConvBeca> {
    const url = this.API_URL + `/tipos-conv-becas/${id}`;
    return this.http.get<TiposConvBeca>(url);
  }

  getTiposConvBecaBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<TiposConvBecaRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/tipos-conv-becas?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<TiposConvBecaRespuesta>(url);
  }

  create(
    newTiposConvBeca: TiposConvBecaCreateDTO
  ): Observable<TiposConvBecaPostRespuesta> {
    const url = this.API_URL + `/tipos-conv-becas`;
    return this.http.post<TiposConvBecaPostRespuesta>(url, newTiposConvBeca);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: TiposConvBecaCreateDTO
  ): Observable<TiposConvBecaRespuesta> {
    const url = this.API_URL + `/tipos-conv-becas/${ID}`;
    return this.http.put<TiposConvBecaRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/tipos-conv-becas/${ID}`;
    return this.http.delete<TiposConvBecaRespuesta>(url);
  }

  getAll(): Observable<TiposConvBecaRespuesta> {
    const url = this.API_URL + `/tipos-conv-becas?pagination=false&order[nombre]=asc`;
    return this.http.get<TiposConvBecaRespuesta>(url);
  }

  getBusqueda(endpoint: string): Observable<any> {
    const url =
      this.API_URL +
      `/becas-proyectos` +
      endpoint +
      `&order[solicitante]=asc`;
    return this.http.get<any>(url);
  }
}
