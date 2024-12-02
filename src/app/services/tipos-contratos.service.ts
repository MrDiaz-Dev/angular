import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { TipoContrato, TipoContratoCreateDTO, TipoContratoPostRespuesta, TipoContratoRespuesta } from '../interfaces/tipo-contrato.interface';


@Injectable({
  providedIn: 'root'
})
export class TipoContratoService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAll(): Observable<TipoContratoRespuesta> {
    const url = this.API_URL + `/tipos-contratos?pagination=false`;
    return this.http.get<TipoContratoRespuesta>(url);
  }

  paginated(urlParams: string): Observable<TipoContratoRespuesta> {
    const url = this.API_URL + `/tipos-contratos?${urlParams}`;
    return this.http.get<TipoContratoRespuesta>(url);
  }
  
  getByID(id: number): Observable<TipoContrato> {
    const url = this.API_URL + `/tipos-contratos/${id}`;
    return this.http.get<TipoContrato>(url);
  }

  getTiposContratos(): Observable<TipoContratoRespuesta> {
    const url = this.API_URL + `/tipos-contratos`;
    return this.http.get<TipoContratoRespuesta>(url);
  }

  getTipoContratoFromPage(page: number): Observable<TipoContratoRespuesta> {
    const url =
      this.API_URL +
      `/tipos-contratos?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<TipoContratoRespuesta>(url);
  }

  getTipoContratoByID(id: number): Observable<TipoContrato> {
    const url = this.API_URL + `/tipos-contratos/${id}`;
    return this.http.get<TipoContrato>(url);
  }

  getTipoContratoBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<TipoContratoRespuesta> {
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
      `/tipos-contratos?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<TipoContratoRespuesta>(url);
  }

  create(
    newTipoContrato: TipoContratoCreateDTO
  ): Observable<TipoContratoPostRespuesta> {
    const url = this.API_URL + `/tipos-contratos`;
    return this.http.post<TipoContratoPostRespuesta>(url, newTipoContrato);
  }

  edit(
    autMicroID: number,
    autMicroToEdit: TipoContratoCreateDTO
  ): Observable<TipoContratoRespuesta> {
    const url = this.API_URL + `/tipos-contratos/${autMicroID}`;
    return this.http.put<TipoContratoRespuesta>(url, autMicroToEdit);
  }

  delete(autMicroID: number) {
    const url = this.API_URL + `/tipos-contratos/${autMicroID}`;
    return this.http.delete<TipoContratoRespuesta>(url);
  }

  deleteArray(IDs): Observable<TipoContratoRespuesta> {
    const url = this.API_URL + `/tipos-contratos/delete-array`;
    return this.http.post<TipoContratoRespuesta>(url, IDs);
  }
}
