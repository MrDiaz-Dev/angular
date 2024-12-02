import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  LlavesLab, 
  LlavesLabCreateDTO, 
  LlavesLabPostRespuesta, 
  LlavesLabRespuesta 
} from '../interfaces/llaves-labs.interface';

@Injectable({
  providedIn: 'root'
})
export class LlavesLabsService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getLlavesLabFromPage(page: number): Observable<LlavesLabRespuesta> {
    const url =
      this.API_URL +
      `/llaves-labs?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<LlavesLabRespuesta>(url);
  }

  getLlavesLabByID(id: number): Observable<LlavesLab> {
    const url = this.API_URL + `/llaves-labs/${id}`;
    return this.http.get<LlavesLab>(url);
  }

  getLlavesLabBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<LlavesLabRespuesta> {
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
      `/llaves-labs?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<LlavesLabRespuesta>(url);
  }

  create(
    newLlavesLab: LlavesLabCreateDTO
  ): Observable<LlavesLabPostRespuesta> {
    const url = this.API_URL + `/llaves-labs`;
    return this.http.post<LlavesLabPostRespuesta>(url, newLlavesLab);
  }

  edit(
    autAccesoID: number,
    autAccesoToEdit: LlavesLabCreateDTO
  ): Observable<LlavesLabRespuesta> {
    const url = this.API_URL + `/llaves-labs/${autAccesoID}`;
    return this.http.put<LlavesLabRespuesta>(url, autAccesoToEdit);
  }

  delete(autAccesoID: number) {
    const url = this.API_URL + `/llaves-labs/${autAccesoID}`;
    return this.http.delete<LlavesLabRespuesta>(url);
  }

}

