import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  LlaveTarjeta,
  LlaveTarjetaCreateDTO,
  LlaveTarjetasPostRespuesta,
  LlaveTarjetasRespuesta,
} from '../interfaces/llaves-tarjetas.interface';

@Injectable({
  providedIn: 'root',
})
export class LlaveTarjetasService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getLlaveTarjetasFromPage(page: number): Observable<LlaveTarjetasRespuesta> {
    const url =
      this.API_URL +
      `/llaves-tarjetas?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<LlaveTarjetasRespuesta>(url);
  }

  getLlaveTarjetasByID(id: number): Observable<LlaveTarjeta> {
    const url = this.API_URL + `/llaves-tarjetas/${id}`;
    return this.http.get<LlaveTarjeta>(url);
  }

  getBusqueda(
    page: number = 1,
    itemsPerPage: number = 10,
    endpoint: string = ''
  ): Observable<LlaveTarjetasRespuesta> {
    const url = `${this.API_URL}/llaves-tarjetas?page=${page}&itemsPerPage=${itemsPerPage}${endpoint}`;
    return this.http.get<LlaveTarjetasRespuesta>(url);
  }

  getLlaveTarjetasBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<LlaveTarjetasRespuesta> {
    let toSearch: string;
    let dateAfterToSearch: string = '';
    let dateBeforeToSearch: string = '';

    if (campo === 'fechaInicio' || campo === 'fechaFin') {
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
      `/llaves-tarjetas?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<LlaveTarjetasRespuesta>(url);
  }

  create(
    newLlaveTarjeta: LlaveTarjetaCreateDTO
  ): Observable<LlaveTarjetasPostRespuesta> {
    const url = this.API_URL + `/llaves-tarjetas`;
    return this.http.post<LlaveTarjetasPostRespuesta>(url, newLlaveTarjeta);
  }

  edit(
    autTarjetaID: number,
    autTarjetaToEdit: LlaveTarjetaCreateDTO
  ): Observable<LlaveTarjetasRespuesta> {
    const url = this.API_URL + `/llaves-tarjetas/${autTarjetaID}`;
    return this.http.put<LlaveTarjetasRespuesta>(url, autTarjetaToEdit);
  }

  delete(autTarjetaID: number) {
    const url = this.API_URL + `/llaves-tarjetas/${autTarjetaID}`;
    return this.http.delete<LlaveTarjetasRespuesta>(url);
  }
}
