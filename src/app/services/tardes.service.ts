import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { PagoTarde, PagoTardeCreateDTO, PagoTardePostRespuesta, PagoTardeRespuesta } from '../interfaces/tardes.interface';

@Injectable({
  providedIn: 'root'
})
export class TardesService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  paginated(urlParams: string): Observable<PagoTardeRespuesta> {
    const url = this.API_URL + `/pagos-tardes?${urlParams}`;
    return this.http.get<PagoTardeRespuesta>(url);
  }

  getAll(): Observable<PagoTardeRespuesta> {
    const url = this.API_URL + `/pagos-tardes?pagination=false`;
    return this.http.get<PagoTardeRespuesta>(url);
  }

  getByID(id: number): Observable<PagoTarde> {
    const url = this.API_URL + `/pagos-tardes/${id}`;
    return this.http.get<PagoTarde>(url);
  }

  getPagosTardes(): Observable<PagoTardeRespuesta> {
    const url = this.API_URL + `/pagos-tardes`;
    return this.http.get<PagoTardeRespuesta>(url);
  }

  getPagoTardeFromPage(page: number): Observable<PagoTardeRespuesta> {
    const url =
      this.API_URL +
      `/pagos-tardes?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<PagoTardeRespuesta>(url);
  }

  getPagoTardeByID(id: number): Observable<PagoTarde> {
    const url = this.API_URL + `/pagos-tardes/${id}`;
    return this.http.get<PagoTarde>(url);
  }

  getPagoTardeBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<PagoTardeRespuesta> {
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
      `/pagos-tardes?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<PagoTardeRespuesta>(url);
  }

  create(
    newPagoTarde: PagoTardeCreateDTO
  ): Observable<PagoTardePostRespuesta> {
    const url = this.API_URL + `/pagos-tardes`;
    return this.http.post<PagoTardePostRespuesta>(url, newPagoTarde);
  }

  edit(
    autMicroID: number,
    autMicroToEdit: PagoTardeCreateDTO
  ): Observable<PagoTardeRespuesta> {
    const url = this.API_URL + `/pagos-tardes/${autMicroID}`;
    return this.http.put<PagoTardeRespuesta>(url, autMicroToEdit);
  }

  delete(autMicroID: number) {
    const url = this.API_URL + `/pagos-tardes/${autMicroID}`;
    return this.http.delete<PagoTardeRespuesta>(url);
  }

  deleteArray(IDs): Observable<PagoTardeRespuesta> {
    const url = this.API_URL + `/pagos-tardes/delete-array`;
    return this.http.post<PagoTardeRespuesta>(url, IDs);
  }
}
