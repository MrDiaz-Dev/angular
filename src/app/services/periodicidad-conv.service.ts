import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PeriodicidadConv, PeriodicidadConvCreateDTO, PeriodicidadConvPostRespuesta, PeriodicidadConvRespuesta } from '../interfaces/periodicidad-convs.interface';

@Injectable({
  providedIn: 'root'
})
export class PeriodicidadConvService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }

  getPeriodicidadConvFromPage(page: number): Observable<PeriodicidadConvRespuesta> {
    const url =
      this.API_URL +
      `/periodicidad-convs?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<PeriodicidadConvRespuesta>(url);
  }

  getPeriodicidadConvByID(id: number): Observable<PeriodicidadConv> {
    const url = this.API_URL + `/periodicidad-convs/${id}`;
    return this.http.get<PeriodicidadConv>(url);
  }

  getPeriodicidadConvBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<PeriodicidadConvRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/periodicidad-convs?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<PeriodicidadConvRespuesta>(url);
  }

  create(
    newPeriodicidadConv: PeriodicidadConvCreateDTO
  ): Observable<PeriodicidadConvPostRespuesta> {
    const url = this.API_URL + `/periodicidad-convs`;
    return this.http.post<PeriodicidadConvPostRespuesta>(url, newPeriodicidadConv);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: PeriodicidadConvCreateDTO
  ): Observable<PeriodicidadConvRespuesta> {
    const url = this.API_URL + `/periodicidad-convs/${ID}`;
    return this.http.put<PeriodicidadConvRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/periodicidad-convs/${ID}`;
    return this.http.delete<PeriodicidadConvRespuesta>(url);
  }
}
