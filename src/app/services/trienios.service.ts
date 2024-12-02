import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  Trienio,
  TrienioCreateDTO,
  TrienioPostRespuesta,
  TrienioRespuesta,
} from '../interfaces/trienios.interface';

@Injectable({
  providedIn: 'root',
})
export class TrieniosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  paginated(urlParams: string): Observable<TrienioRespuesta> {
    const url = this.API_URL + `/trienios?${urlParams}`;
    return this.http.get<TrienioRespuesta>(url);
  }

  getTrienioFromPage(page: number): Observable<TrienioRespuesta> {
    const url =
      this.API_URL + `/trienios?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<TrienioRespuesta>(url);
  }

  getTrienioByID(id: number): Observable<Trienio> {
    const url = this.API_URL + `/trienios/${id}`;
    return this.http.get<Trienio>(url);
  }

  getTrienioBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<TrienioRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/trienios?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<TrienioRespuesta>(url);
  }

  create(newTrienio: TrienioCreateDTO): Observable<TrienioPostRespuesta> {
    const url = this.API_URL + `/trienios`;
    return this.http.post<TrienioPostRespuesta>(url, newTrienio);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: TrienioCreateDTO
  ): Observable<TrienioRespuesta> {
    const url = this.API_URL + `/trienios/${ID}`;
    return this.http.put<TrienioRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/trienios/${ID}`;
    return this.http.delete<TrienioRespuesta>(url);
  }

  deleteArray(IDs) {
    const url = this.API_URL + `/trienios/delete-array`;
    return this.http.post<TrienioRespuesta>(url, IDs);
  }
}
