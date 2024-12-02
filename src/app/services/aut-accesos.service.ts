import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  AutAcceso, 
  AutAccesoCreateDTO, 
  AutAccesosPostRespuesta, 
  AutAccesosRespuesta 
} from '../interfaces/aut-accesos.interface';


@Injectable({
  providedIn: 'root'
})
export class AutAccesosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAutAccesosFromPage(page: number): Observable<AutAccesosRespuesta> {
    const url =
      this.API_URL +
      `/aut-accesos?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<AutAccesosRespuesta>(url);
  }

  getAutAccesosByID(id: number): Observable<AutAcceso> {
    const url = this.API_URL + `/aut-accesos/${id}`;
    return this.http.get<AutAcceso>(url);
  }

  getAutAccesosBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<AutAccesosRespuesta> {
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
      `/aut-accesos?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<AutAccesosRespuesta>(url);
  }

  create(
    newAutAcceso: AutAccesoCreateDTO
  ): Observable<AutAccesosPostRespuesta> {
    const url = this.API_URL + `/aut-accesos`;
    return this.http.post<AutAccesosPostRespuesta>(url, newAutAcceso);
  }

  edit(
    autAccesoID: number,
    autAccesoToEdit: AutAccesoCreateDTO
  ): Observable<AutAccesosRespuesta> {
    const url = this.API_URL + `/aut-accesos/${autAccesoID}`;
    return this.http.put<AutAccesosRespuesta>(url, autAccesoToEdit);
  }

  delete(autAccesoID: number) {
    const url = this.API_URL + `/aut-accesos/${autAccesoID}`;
    return this.http.delete<AutAccesosRespuesta>(url);
  }
}
