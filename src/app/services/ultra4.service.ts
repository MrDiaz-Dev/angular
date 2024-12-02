import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  Ultra,
  UltraCreateDTO,
  UltraPostRespuesta,
  UltraRespuesta,
} from '../interfaces/ultra.interface';

@Injectable({
  providedIn: 'root',
})
export class Ultra4Service {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getUltra4FromPage(page: number): Observable<UltraRespuesta> {
    const url =
      this.API_URL + `/ultra4s?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<UltraRespuesta>(url);
  }

  getUltra4ByID(id: number): Observable<Ultra> {
    const url = this.API_URL + `/ultra4s/${id}`;
    return this.http.get<Ultra>(url);
  }

  getUltra4By(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<UltraRespuesta> {
    let toSearch: string;
    let dateAfterToSearch: string = '';
    let dateBeforeToSearch: string = '';

    if (campo === 'fecha') {
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
      `/ultra4s?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<UltraRespuesta>(url);
  }

  create(newUltra4: UltraCreateDTO): Observable<UltraPostRespuesta> {
    const url = this.API_URL + `/ultra4s`;
    return this.http.post<UltraPostRespuesta>(url, newUltra4);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: UltraCreateDTO
  ): Observable<UltraRespuesta> {
    const url = this.API_URL + `/ultra4s/${ID}`;
    return this.http.put<UltraRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/ultra4s/${ID}`;
    return this.http.delete<UltraRespuesta>(url);
  }
}
