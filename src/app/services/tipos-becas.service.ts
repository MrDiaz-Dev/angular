import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  TiposBeca,
  TiposBecaCreateDTO,
  TiposBecaPostRespuesta,
  TiposBecaRespuesta,
} from '../interfaces/tipos-becas.interface';

@Injectable({
  providedIn: 'root',
})
export class TiposBecasService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  paginated(urlParams: string): Observable<TiposBecaRespuesta> {
    const url = this.API_URL + `/tipos-becas?${urlParams}`;
    return this.http.get<TiposBecaRespuesta>(url);
  }

  getTiposBecaFromPage(page: number): Observable<TiposBecaRespuesta> {
    const url =
      this.API_URL +
      `/tipos-becas?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<TiposBecaRespuesta>(url);
  }

  getTiposBecaByID(id: number): Observable<TiposBeca> {
    const url = this.API_URL + `/tipos-becas/${id}`;
    return this.http.get<TiposBeca>(url);
  }

  getTiposBecaBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<TiposBecaRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/tipos-becas?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<TiposBecaRespuesta>(url);
  }

  create(newTiposBeca: TiposBecaCreateDTO): Observable<TiposBecaPostRespuesta> {
    const url = this.API_URL + `/tipos-becas`;
    return this.http.post<TiposBecaPostRespuesta>(url, newTiposBeca);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: TiposBecaCreateDTO
  ): Observable<TiposBecaRespuesta> {
    const url = this.API_URL + `/tipos-becas/${ID}`;
    return this.http.put<TiposBecaRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/tipos-becas/${ID}`;
    return this.http.delete<TiposBecaRespuesta>(url);
  }

  deleteArray(IDs): Observable<TiposBecaRespuesta> {
    const url = this.API_URL + `/tipos-becas/delete-array`;
    return this.http.post<TiposBecaRespuesta>(url, IDs);
  }
}
