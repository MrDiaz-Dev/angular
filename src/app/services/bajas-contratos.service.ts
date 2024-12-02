import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  BajasContrato, 
  BajasContratoCreateDTO, 
  BajasContratosPostRespuesta, 
  BajasContratosRespuesta 
} from '../interfaces/bajas-contratos.interface';

@Injectable({
  providedIn: 'root'
})
export class BajasContratosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getBajasContratosFromPage(page: number): Observable<BajasContratosRespuesta> {
    const url =
      this.API_URL +
      `/bajas-contratos?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<BajasContratosRespuesta>(url);
  }

  getBajasContratosByID(id: number): Observable<BajasContrato> {
    const url = this.API_URL + `/bajas-contratos/${id}`;
    return this.http.get<BajasContrato>(url);
  }

  getBajasContratosBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<BajasContratosRespuesta> {
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
      `/bajas-contratos?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<BajasContratosRespuesta>(url);
  }

  create(
    newBajasContrato: BajasContratoCreateDTO
  ): Observable<BajasContratosPostRespuesta> {
    const url = this.API_URL + `/bajas-contratos`;
    return this.http.post<BajasContratosPostRespuesta>(url, newBajasContrato);
  }

  edit(
    autAccesoID: number,
    autAccesoToEdit: BajasContratoCreateDTO
  ): Observable<BajasContratosRespuesta> {
    const url = this.API_URL + `/bajas-contratos/${autAccesoID}`;
    return this.http.put<BajasContratosRespuesta>(url, autAccesoToEdit);
  }

  delete(autAccesoID: number) {
    const url = this.API_URL + `/bajas-contratos/${autAccesoID}`;
    return this.http.delete<BajasContratosRespuesta>(url);
  }

}
