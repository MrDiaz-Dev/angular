import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  VisitasPersonales,
  VisitasPersonalesCreateDTO,
  VisitasPersonalesPostRespuesta,
  VisitasPersonalesRespuesta,
} from '../interfaces/visitas-personales.interface';

@Injectable({
  providedIn: 'root',
})
export class VisitasPersonalessService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getVisitasPersonalesFromPage(
    page: number
  ): Observable<VisitasPersonalesRespuesta> {
    const url =
      this.API_URL +
      `/visitas-personals?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<VisitasPersonalesRespuesta>(url);
  }

  getVisitasPersonalesByID(id: number): Observable<VisitasPersonales> {
    const url = this.API_URL + `/visitas-personals/${id}`;
    return this.http.get<VisitasPersonales>(url);
  }

  getVisitasPersonalesBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<VisitasPersonalesRespuesta> {
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
      `/visitas-personals?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<VisitasPersonalesRespuesta>(url);
  }

  create(
    newVisitasPersonales: VisitasPersonalesCreateDTO
  ): Observable<VisitasPersonalesPostRespuesta> {
    const url = this.API_URL + `/visitas-personals`;
    return this.http.post<VisitasPersonalesPostRespuesta>(
      url,
      newVisitasPersonales
    );
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: VisitasPersonalesCreateDTO
  ): Observable<VisitasPersonalesRespuesta> {
    const url = this.API_URL + `/visitas-personals/${ID}`;
    return this.http.put<VisitasPersonalesRespuesta>(
      url,
      categoriaEquipoToEdit
    );
  }

  delete(ID: number) {
    const url = this.API_URL + `/visitas-personals/${ID}`;
    return this.http.delete<VisitasPersonalesRespuesta>(url);
  }
}
