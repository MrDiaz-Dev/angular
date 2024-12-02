import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  LlavesMicro, 
  LlavesMicroCreateDTO, 
  LlavesMicroPostRespuesta, 
  LlavesMicroRespuesta 
} from '../interfaces/llaves-micros.interface';

@Injectable({
  providedIn: 'root'
})
export class LlavesMicrosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getLlavesMicroFromPage(page: number): Observable<LlavesMicroRespuesta> {
    const url =
      this.API_URL +
      `/llaves-micros?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<LlavesMicroRespuesta>(url);
  }

  getLlavesMicroByID(id: number): Observable<LlavesMicro> {
    const url = this.API_URL + `/llaves-micros/${id}`;
    return this.http.get<LlavesMicro>(url);
  }

  getLlavesMicroBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<LlavesMicroRespuesta> {
    let toSearch: string;
    let dateAfterToSearch: string = '';
    let dateBeforeToSearch: string = '';

    if (campo === 'entrada' || campo === 'salida'){
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
      `/llaves-micros?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<LlavesMicroRespuesta>(url);
  }

  create(
    newLlavesMicro: LlavesMicroCreateDTO
  ): Observable<LlavesMicroPostRespuesta> {
    const url = this.API_URL + `/llaves-micros`;
    return this.http.post<LlavesMicroPostRespuesta>(url, newLlavesMicro);
  }

  edit(
    autAccesoID: number,
    autAccesoToEdit: LlavesMicroCreateDTO
  ): Observable<LlavesMicroRespuesta> {
    const url = this.API_URL + `/llaves-micros/${autAccesoID}`;
    return this.http.put<LlavesMicroRespuesta>(url, autAccesoToEdit);
  }

  delete(autAccesoID: number) {
    const url = this.API_URL + `/llaves-micros/${autAccesoID}`;
    return this.http.delete<LlavesMicroRespuesta>(url);
  }

}
