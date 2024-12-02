import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TiposDesvio, TiposDesvioCreateDTO, TiposDesvioPostRespuesta, TiposDesvioRespuesta } from '../interfaces/tipos-desvios.interface';

@Injectable({
  providedIn: 'root'
})
export class TiposDesviosService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }

  getTiposDesvioFromPage(page: number): Observable<TiposDesvioRespuesta> {
    const url =
      this.API_URL +
      `/tipos-desvios?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<TiposDesvioRespuesta>(url);
  }

  getTiposDesvioByID(id: number): Observable<TiposDesvio> {
    const url = this.API_URL + `/tipos-desvios/${id}`;
    return this.http.get<TiposDesvio>(url);
  }

  getTiposDesvioBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<TiposDesvioRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/tipos-desvios?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<TiposDesvioRespuesta>(url);
  }

  create(
    newTiposDesvio: TiposDesvioCreateDTO
  ): Observable<TiposDesvioPostRespuesta> {
    const url = this.API_URL + `/tipos-desvios`;
    return this.http.post<TiposDesvioPostRespuesta>(url, newTiposDesvio);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: TiposDesvioCreateDTO
  ): Observable<TiposDesvioRespuesta> {
    const url = this.API_URL + `/tipos-desvios/${ID}`;
    return this.http.put<TiposDesvioRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/tipos-desvios/${ID}`;
    return this.http.delete<TiposDesvioRespuesta>(url);
  }
}
