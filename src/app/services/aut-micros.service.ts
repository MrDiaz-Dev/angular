import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutMicro, AutMicroCreateDTO, AutMicrosPostRespuesta, AutMicrosRespuesta } from '../interfaces/aut-micros.interface';

@Injectable({
  providedIn: 'root'
})
export class AutMicrosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAutMicrosFromPage(page: number): Observable<AutMicrosRespuesta> {
    const url =
      this.API_URL +
      `/aut-micros?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<AutMicrosRespuesta>(url);
  }

  getAutMicrosByID(id: number): Observable<AutMicro> {
    const url = this.API_URL + `/aut-micros/${id}`;
    return this.http.get<AutMicro>(url);
  }

  getAutMicrosBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<AutMicrosRespuesta> {
    let toSearch: string;
    let dateAfterToSearch: string = '';
    let dateBeforeToSearch: string = '';

    if (campo === 'fechaInicio' || campo === 'fechaFin'){
      if (valueToSearch != '') {
        dateAfterToSearch = '&' + campo + '[after]=' + valueToSearch;
      }

      if (SecondValueforFecha != '') {
        dateBeforeToSearch = '&' + campo + '[before]=' + SecondValueforFecha;
      }
      toSearch = dateAfterToSearch + dateBeforeToSearch;
    } else {
      toSearch = '&' + campo + '=' + valueToSearch;
    }

    const url =
      this.API_URL +
      `/aut-micros?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<AutMicrosRespuesta>(url);
  }

  create(
    newAutMicro: AutMicroCreateDTO
  ): Observable<AutMicrosPostRespuesta> {
    const url = this.API_URL + `/aut-micros`;
    return this.http.post<AutMicrosPostRespuesta>(url, newAutMicro);
  }

  edit(
    autMicroID: number,
    autMicroToEdit: AutMicroCreateDTO
  ): Observable<AutMicrosRespuesta> {
    const url = this.API_URL + `/aut-micros/${autMicroID}`;
    return this.http.put<AutMicrosRespuesta>(url, autMicroToEdit);
  }

  delete(autMicroID: number) {
    const url = this.API_URL + `/aut-micros/${autMicroID}`;
    return this.http.delete<AutMicrosRespuesta>(url);
  }
}
