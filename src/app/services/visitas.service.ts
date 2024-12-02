import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  Visitas,
  VisitasCreateDTO,
  VisitasPostRespuesta,
  VisitasRespuesta,
} from '../interfaces/visitas.interface';

@Injectable({
  providedIn: 'root',
})
export class VisitasService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getVisitasFromPage(page: number): Observable<VisitasRespuesta> {
    const url =
      this.API_URL + `/visitas?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<VisitasRespuesta>(url);
  }

  getVisitasByID(id: number): Observable<Visitas> {
    const url = this.API_URL + `/visitas/${id}`;
    return this.http.get<Visitas>(url);
  }

  getVisitasBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<VisitasRespuesta> {
    let toSearch: string;
    let dateAfterToSearch: string = '';
    let dateBeforeToSearch: string = '';

    if (campo === 'entrada' || campo === 'salida') {
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
      `/visitas?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<VisitasRespuesta>(url);
  }

  create(
    newVisitas: VisitasCreateDTO
  ): Observable<VisitasPostRespuesta> {
    const url = this.API_URL + `/visitas`;
    return this.http.post<VisitasPostRespuesta>(url, newVisitas);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: VisitasCreateDTO
  ): Observable<VisitasRespuesta> {
    const url = this.API_URL + `/visitas/${ID}`;
    return this.http.put<VisitasRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/visitas/${ID}`;
    return this.http.delete<VisitasRespuesta>(url);
  }
}
