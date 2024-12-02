import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Microscopio, MicroscopioCreateDTO, MicroscopiosPostRespuesta, MicroscopiosRespuesta } from '../interfaces/microscopios.interface';

@Injectable({
  providedIn: 'root',
})
export class MicroscopiosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getMicrosFromPage(page: number): Observable<MicroscopiosRespuesta> {
    const url =
      this.API_URL +
      `/microscopios?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<MicroscopiosRespuesta>(url);
  }

  getMicrosByID(id: number): Observable<Microscopio> {
    const url = this.API_URL + `/microscopios/${id}`;
    return this.http.get<Microscopio>(url);
  }

  getMicrosBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<MicroscopiosRespuesta> {
    const toSearch = '&' + campo + '=' + valueToSearch;
    const url =
      this.API_URL +
      `/microscopios?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;
    console.log('hey');
    return this.http.get<MicroscopiosRespuesta>(url);
  }

  create(
    newMicro: MicroscopioCreateDTO
  ): Observable<MicroscopiosPostRespuesta> {
    const url = this.API_URL + `/microscopios`;
    return this.http.post<MicroscopiosPostRespuesta>(url, newMicro);
  }

  edit(
    microID: number,
    microToEdit: MicroscopioCreateDTO
  ): Observable<MicroscopiosRespuesta> {
    const url = this.API_URL + `/microscopios/${microID}`;
    return this.http.put<MicroscopiosRespuesta>(url, microToEdit);
  }

  delete(microID: number) {
    const url = this.API_URL + `/microscopios/${microID}`;
    return this.http.delete<MicroscopiosRespuesta>(url);
  }
}
