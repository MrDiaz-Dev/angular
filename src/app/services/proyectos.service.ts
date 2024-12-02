import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ProyectoEmpleadosRespuesta } from '../interfaces/proyecto-empleados.interface';

import { Proyecto, ProyectosRepuesta } from '../interfaces/proyecto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  buscarProrrogasPendientes(): Observable<ProyectosRepuesta> {
    const url = `${this.API_URL}/busqueda-prorrogas-pendientes`;
    return this.http.get<ProyectosRepuesta>(url);
  }

  buscarProrrogasConcedidas(): Observable<ProyectosRepuesta> {
    const url = `${this.API_URL}/busqueda-prorrogas-concedidas`;
    return this.http.get<ProyectosRepuesta>(url);
  }

  // buscarEmpleadosProyecto(endpoint: string): Observable<ProyectoEmpleadosRespuesta> {
  //   const url = this.API_URL + `/proyectos` + endpoint;
  //   return this.http.get<ProyectoEmpleadosRespuesta>(url);
  // }

  buscarEmpleadosProyecto(
    id: number,
    endpoint: string
  ): Observable<ProyectoEmpleadosRespuesta> {
    const url = this.API_URL + `/proyectos/${id}/empleados-proyecto` + endpoint;
    console.log(url);
    return this.http.get<ProyectoEmpleadosRespuesta>(url);
  }

  getProyectos(endpoint: string): Observable<ProyectosRepuesta> {
    const url = this.API_URL + `/proyectos` + endpoint;
    return this.http.get<ProyectosRepuesta>(url);
  }

  getById(id: number): Observable<Proyecto> {
    const url = this.API_URL + `/proyectos/` + id;
    return this.http.get<Proyecto>(url);
  }

  getAll(): Observable<ProyectosRepuesta> {
    // const url = this.API_URL + `/proyectos?pagination=false`;
    const url =
      this.API_URL +
      `/proyectos?pagination=false&order[referencia]=asc&properties[]=id&properties[]=referencia&properties[]=cuenta&properties[]=nombre&referencia=`;
    return this.http.get<ProyectosRepuesta>(url);
  }

  getCuentas(): Observable<any> {
    const url = this.API_URL + `/cuentas?pagination=false&activa=si`;
    return this.http.get(url);
  }
  
  editProyecto(idProyecto: number, newProyect: Proyecto): Observable<Proyecto> {
    const url = this.API_URL + `/proyectos/${idProyecto}`;
    return this.http.put<Proyecto>(url, newProyect);
  }
}
