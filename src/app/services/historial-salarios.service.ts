import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Salarios,
  SalariosCreateDTO,
  SalariosPostRespuesta,
  SalariosRespuesta,
} from '../interfaces/salarios.interface';

@Injectable({
  providedIn: 'root'
})
export class HistorialSalariosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getByID(id: number): Observable<Salarios> {
    const url = this.API_URL + `/historial-salarios/${id}`;
    return this.http.get<Salarios>(url);
  }

  paginated(urlParams: string): Observable<SalariosRespuesta> {
    const url = this.API_URL + `/historial-salarios?${urlParams}`;
    return this.http.get<SalariosRespuesta>(url);
  }

  getBusqueda(
    page: number = 1,
    itemsPerPage: number = 10,
    endpoint: string = ''
  ): Observable<SalariosRespuesta> {
    const url = `${this.API_URL}/salarios?page=${page}&itemsPerPage=${itemsPerPage}${endpoint}`;
    return this.http.get<SalariosRespuesta>(url);
  }
  
  getSalariosBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<SalariosRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/paises?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<SalariosRespuesta>(url);
  }

  create(newSalarios: SalariosCreateDTO): Observable<SalariosPostRespuesta> {
    const url = this.API_URL + `/historial-salarios`;
    return this.http.post<SalariosPostRespuesta>(url, newSalarios);
  }

  edit(
    autTarjetaID: number,
    autTarjetaToEdit: SalariosCreateDTO
  ): Observable<SalariosRespuesta> {
    const url = this.API_URL + `/historial-salarios/${autTarjetaID}`;
    return this.http.put<SalariosRespuesta>(url, autTarjetaToEdit);
  }

  delete(autTarjetaID: number) {
    const url = this.API_URL + `/historial-salarios/${autTarjetaID}`;
    return this.http.delete<SalariosRespuesta>(url);
  }

  deleteArray(IDs): Observable<SalariosRespuesta> {
    const url = this.API_URL + `/historial-salarios/delete-array`;
    return this.http.post<SalariosRespuesta>(url, IDs);
  }
}
