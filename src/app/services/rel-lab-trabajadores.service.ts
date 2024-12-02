import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RelLabTrabajadoresLaboratoriosRespuesta } from '../interfaces/rel-lab-trabajadores-laboratorios.interface';
import { RelLabTrabajadoresDepartamentosRespuesta } from '../interfaces/rel-lab-trabajadores-departamentos.interface';
import { LaboratoriosHistorialRespuesta } from '../interfaces/rel-lab-trabajadores-laboratorios-historial.interface';
import { RelLabTrabajadoresPostPutRespuesta } from '../interfaces/rel-lab-trabajadores-post-put.interface';


@Injectable({
  providedIn: 'root'
})
export class RelLabTrabajadoresService {

  private API_URL= environment.API_URL;

  constructor(private http: HttpClient) { }

  // Busqueda de laboratorios pro etapas del historial
  getLaboratoriosHistorial(endpoint: string): Observable<LaboratoriosHistorialRespuesta> {
    const url = this.API_URL + `/rel-lab-trabajadores?itemsPerPage=100` + endpoint;
    return this.http.get<LaboratoriosHistorialRespuesta>(url);
  }
  getLaboratorios(endpoint: string): Observable<RelLabTrabajadoresLaboratoriosRespuesta> {
    const url = this.API_URL + `/rel-lab-trabajadores?itemsPerPage=1000` + endpoint;
    return this.http.get<RelLabTrabajadoresLaboratoriosRespuesta>(url);
  }

  getRelLabTrab(endpoint: string): Observable<RelLabTrabajadoresPostPutRespuesta> {
    const url = this.API_URL + `/rel-lab-trabajadores?itemsPerPage=1000` + endpoint;
    return this.http.get<RelLabTrabajadoresPostPutRespuesta>(url);
  }


  edit( idUri: string, data: any ): Observable<any>{
    const url = this.API_URL + `/rel-lab-trabajadores/${idUri}`;
    return this.http.put(url, data);
  }

  create( data: any ): Observable<any>{
    const url = this.API_URL + `/rel-lab-trabajadores`;
    return this.http.post(url, data);
  }

  // Formularios de busqueda
   getBusquedaLaboratorios(endpoint: string): Observable<RelLabTrabajadoresLaboratoriosRespuesta> {
    const url = this.API_URL + `/rel-lab-trabajadores/laboratorios` + endpoint;
    return this.http.get<RelLabTrabajadoresLaboratoriosRespuesta>(url);
  }
   getBusquedaDepartamentos(endpoint: string): Observable<RelLabTrabajadoresDepartamentosRespuesta> {
    const url = this.API_URL + `/rel-lab-trabajadores/departamentos` + endpoint;
    return this.http.get<RelLabTrabajadoresDepartamentosRespuesta>(url);
  }
}
