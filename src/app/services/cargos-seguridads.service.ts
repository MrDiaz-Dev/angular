import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  CargosSeguridad, 
  CargosSeguridadCreateDTO, 
  CargosSeguridadsPostRespuesta, 
  CargosSeguridadsRespuesta 
} from '../interfaces/cargos-seguridads.interface';

@Injectable({
  providedIn: 'root'
})
export class CargosSeguridadsService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getCargosSeguridadsFromPage(page: number): Observable<CargosSeguridadsRespuesta> {
    const url =
      this.API_URL +
      `/cargos-seguridads?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<CargosSeguridadsRespuesta>(url);
  }

  getCargosSeguridadsByID(id: number): Observable<CargosSeguridad> {
    const url = this.API_URL + `/cargos-seguridads/${id}`;
    return this.http.get<CargosSeguridad>(url);
  }

  getCargosSeguridadsBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<CargosSeguridadsRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/cargos-seguridads?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<CargosSeguridadsRespuesta>(url);
  }

  create(
    newCargosSeguridad: CargosSeguridadCreateDTO
  ): Observable<CargosSeguridadsPostRespuesta> {
    const url = this.API_URL + `/cargos-seguridads`;
    return this.http.post<CargosSeguridadsPostRespuesta>(url, newCargosSeguridad);
  }

  edit(
    ID: number,
    cargosSeguridadToEdit: CargosSeguridadCreateDTO
  ): Observable<CargosSeguridadsRespuesta> {
    const url = this.API_URL + `/cargos-seguridads/${ID}`;
    return this.http.put<CargosSeguridadsRespuesta>(url, cargosSeguridadToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/cargos-seguridads/${ID}`;
    return this.http.delete<CargosSeguridadsRespuesta>(url);
  }
}
