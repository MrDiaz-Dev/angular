import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  DatosExtranjero, 
  DatosExtranjeroCreateDTO, 
  DatosExtranjeroPostRespuesta, 
  DatosExtranjeroRespuesta 
} from '../interfaces/datos-extranjeros.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosExtranjerosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getDatosExtranjerosFromPage(page: number): Observable<DatosExtranjeroRespuesta> {
    const url =
      this.API_URL +
      `/datos-extranjeros?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<DatosExtranjeroRespuesta>(url);
  }

  getDatosExtranjerosByID(id: number): Observable<DatosExtranjero> {
    const url = this.API_URL + `/datos-extranjeros/${id}`;
    return this.http.get<DatosExtranjero>(url);
  }

  getDatosExtranjerosBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<DatosExtranjeroRespuesta> {
    let toSearch: string;
    let dateAfterToSearch: string = '';
    let dateBeforeToSearch: string = '';

    if (campo === 'fechaSolicitud' || campo === 'fechaHomologacion'){
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
      `/datos-extranjeros?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<DatosExtranjeroRespuesta>(url);
  }

  create(
    newDatosExtranjero: DatosExtranjeroCreateDTO
  ): Observable<DatosExtranjeroPostRespuesta> {
    const url = this.API_URL + `/datos-extranjeros`;
    return this.http.post<DatosExtranjeroPostRespuesta>(url, newDatosExtranjero);
  }

  edit(
    autAccesoID: number,
    autAccesoToEdit: DatosExtranjeroCreateDTO
  ): Observable<DatosExtranjeroRespuesta> {
    const url = this.API_URL + `/datos-extranjeros/${autAccesoID}`;
    return this.http.put<DatosExtranjeroRespuesta>(url, autAccesoToEdit);
  }

  delete(autAccesoID: number) {
    const url = this.API_URL + `/datos-extranjeros/${autAccesoID}`;
    return this.http.delete<DatosExtranjeroRespuesta>(url);
  }

}
