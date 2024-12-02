import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ServiciosEmpleadosRespuesta } from '../interfaces/servicio.empleados.interface';
import {
  Servicio,
  ServicioCreateDTO,
  ServicioPostRespuesta,
  ServiciosRespuesta,
} from '../interfaces/servicio.interface';

@Injectable({
  providedIn: 'root',
})
export class ServiciosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  // getEmpleadosServicio(endpoint: string): Observable<ServiciosEmpleadosRespuesta> {
  //   const url = this.API_URL + `/servicios` + endpoint;;
  //   return this.http.get<ServiciosEmpleadosRespuesta>(url);
  // }
  getEmpleadosServicio(
    idServicio: number,
    endpoint: string
  ): Observable<ServiciosEmpleadosRespuesta> {
    const url = this.API_URL + `/servicios/${idServicio}/busqueda` + endpoint;
    return this.http.get<ServiciosEmpleadosRespuesta>(url);
  }

  getServicio(id: number): Observable<Servicio> {
    const url = this.API_URL + `/servicios/` + id;
    return this.http.get<Servicio>(url);
  }

  getAll(): Observable<ServiciosRespuesta> {
    const url = this.API_URL + `/servicios?pagination=false&order[nombre]=asc`;
    return this.http.get<ServiciosRespuesta>(url);
  }

  paginated(urlParams: string): Observable<ServiciosRespuesta> {
    const url = this.API_URL + `/servicios?${urlParams}`;
    return this.http.get<ServiciosRespuesta>(url);
  }

  getServicioFromPage(page: number): Observable<ServiciosRespuesta> {
    const url =
      this.API_URL + `/servicios?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<ServiciosRespuesta>(url);
  }

  getServicioByID(id: number): Observable<Servicio> {
    const url = this.API_URL + `/servicios/${id}`;
    return this.http.get<Servicio>(url);
  }

  getServicioBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<ServiciosRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/servicios?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<ServiciosRespuesta>(url);
  }

  create(newServicio: ServicioCreateDTO): Observable<ServicioPostRespuesta> {
    const url = this.API_URL + `/servicios`;
    return this.http.post<ServicioPostRespuesta>(url, newServicio);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: ServicioCreateDTO
  ): Observable<ServiciosRespuesta> {
    const url = this.API_URL + `/servicios/${ID}`;
    return this.http.put<ServiciosRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/servicios/${ID}`;
    return this.http.delete<ServiciosRespuesta>(url);
  }

  deleteArray(IDs): Observable<ServiciosRespuesta> {
    const url = this.API_URL + `/servicios/delete-array`;
    return this.http.post<ServiciosRespuesta>(url, IDs);
  }
}
