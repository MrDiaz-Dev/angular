import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TiposConvocatoria, TiposConvocatoriaCreateDTO, TiposConvocatoriaPostRespuesta, TiposConvocatoriaRespuesta } from '../interfaces/tipos-convocatorias.interface';

@Injectable({
  providedIn: 'root'
})
export class TiposConvocatoriasService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }

  getTiposConvocatoriaFromPage(page: number): Observable<TiposConvocatoriaRespuesta> {
    const url =
      this.API_URL +
      `/tipos-convocatorias?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<TiposConvocatoriaRespuesta>(url);
  }

  getTiposConvocatoriaByID(id: number): Observable<TiposConvocatoria> {
    const url = this.API_URL + `/tipos-convocatorias/${id}`;
    return this.http.get<TiposConvocatoria>(url);
  }

  getTiposConvocatoriaBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<TiposConvocatoriaRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/tipos-convocatorias?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<TiposConvocatoriaRespuesta>(url);
  }

  create(
    newTiposConvocatoria: TiposConvocatoriaCreateDTO
  ): Observable<TiposConvocatoriaPostRespuesta> {
    const url = this.API_URL + `/tipos-convocatorias`;
    return this.http.post<TiposConvocatoriaPostRespuesta>(url, newTiposConvocatoria);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: TiposConvocatoriaCreateDTO
  ): Observable<TiposConvocatoriaRespuesta> {
    const url = this.API_URL + `/tipos-convocatorias/${ID}`;
    return this.http.put<TiposConvocatoriaRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/tipos-convocatorias/${ID}`;
    return this.http.delete<TiposConvocatoriaRespuesta>(url);
  }
}