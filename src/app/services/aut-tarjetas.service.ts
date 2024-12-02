import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  AutTarjeta, 
  AutTarjetaCreateDTO, 
  AutTarjetasPostRespuesta, 
  AutTarjetasRespuesta 
} from '../interfaces/aut-tarjetas.interface';

@Injectable({
  providedIn: 'root'
})
export class AutTarjetasService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAutTarjetasFromPage(page: number): Observable<AutTarjetasRespuesta> {
    const url =
      this.API_URL +
      `/aut-tarjetas?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<AutTarjetasRespuesta>(url);
  }

  getAutTarjetasByID(id: number): Observable<AutTarjeta> {
    const url = this.API_URL + `/aut-tarjetas/${id}`;
    return this.http.get<AutTarjeta>(url);
  }

  getAutTarjetasBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<AutTarjetasRespuesta> {
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
      `/aut-tarjetas?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<AutTarjetasRespuesta>(url);
  }

  create(
    newAutTarjeta: AutTarjetaCreateDTO
  ): Observable<AutTarjetasPostRespuesta> {
    const url = this.API_URL + `/aut-tarjetas`;
    return this.http.post<AutTarjetasPostRespuesta>(url, newAutTarjeta);
  }

  edit(
    autTarjetaID: number,
    autTarjetaToEdit: AutTarjetaCreateDTO
  ): Observable<AutTarjetasRespuesta> {
    const url = this.API_URL + `/aut-tarjetas/${autTarjetaID}`;
    return this.http.put<AutTarjetasRespuesta>(url, autTarjetaToEdit);
  }

  delete(autTarjetaID: number) {
    const url = this.API_URL + `/aut-tarjetas/${autTarjetaID}`;
    return this.http.delete<AutTarjetasRespuesta>(url);
  }
}
