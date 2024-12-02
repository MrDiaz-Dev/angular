import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  Dhlog, 
  DhlogCreateDTO, 
  DhlogPostRespuesta, 
  DhlogRespuesta 
} from '../interfaces/dhlogs.interface';

@Injectable({
  providedIn: 'root'
})
export class DhlogsService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getDhlogFromPage(page: number): Observable<DhlogRespuesta> {
    const url =
      this.API_URL +
      `/dhlogs?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<DhlogRespuesta>(url);
  }

  getDhlogByID(id: number): Observable<Dhlog> {
    const url = this.API_URL + `/dhlogs/${id}`;
    return this.http.get<Dhlog>(url);
  }

  getDhlogBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<DhlogRespuesta> {
    let toSearch: string;
    let dateAfterToSearch: string = '';
    let dateBeforeToSearch: string = '';

    if (campo === 'tstamp'){
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
      `/dhlogs?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<DhlogRespuesta>(url);
  }

  create(
    newDhlog: DhlogCreateDTO
  ): Observable<DhlogPostRespuesta> {
    const url = this.API_URL + `/dhlogs`;
    return this.http.post<DhlogPostRespuesta>(url, newDhlog);
  }

  edit(
    autAccesoID: number,
    autAccesoToEdit: DhlogCreateDTO
  ): Observable<DhlogRespuesta> {
    const url = this.API_URL + `/dhlogs/${autAccesoID}`;
    return this.http.put<DhlogRespuesta>(url, autAccesoToEdit);
  }

  delete(autAccesoID: number) {
    const url = this.API_URL + `/dhlogs/${autAccesoID}`;
    return this.http.delete<DhlogRespuesta>(url);
  }

}

