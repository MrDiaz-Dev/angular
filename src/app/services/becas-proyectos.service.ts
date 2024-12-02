import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  BecasProyecto, 
  BecasProyectoCreateDTO, 
  BecasProyectosPostRespuesta, 
  BecasProyectosRespuesta 
} from '../interfaces/becas-proyectos.interface';

@Injectable({
  providedIn: 'root'
})
export class BecasProyectosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getBecasProyectosFromPage(page: number): Observable<BecasProyectosRespuesta> {
    const url =
      this.API_URL +
      `/becas-proyectos?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<BecasProyectosRespuesta>(url);
  }

  getBecasProyectosByID(id: number): Observable<BecasProyecto> {
    const url = this.API_URL + `/becas-proyectos/${id}`;
    return this.http.get<BecasProyecto>(url);
  }

  getBecasProyectosBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<BecasProyectosRespuesta> {
    let toSearch: string;
    let dateAfterToSearch: string = '';
    let dateBeforeToSearch: string = '';

    if (campo === 'fechaSolicitud'){
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
      `/becas-proyectos?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<BecasProyectosRespuesta>(url);
  }

  createProyecto(
    newBecasProyecto: BecasProyectoCreateDTO
  ): Observable<BecasProyectosPostRespuesta> {
    const url = this.API_URL + `/becas-proyectos`;
    return this.http.post<BecasProyectosPostRespuesta>(url, newBecasProyecto);
  }

  edit(
    autAccesoID: number,
    autAccesoToEdit: BecasProyectoCreateDTO
  ): Observable<BecasProyectosRespuesta> {
    const url = this.API_URL + `/becas-proyectos/${autAccesoID}`;
    return this.http.put<BecasProyectosRespuesta>(url, autAccesoToEdit);
  }

  delete(autAccesoID: number) {
    const url = this.API_URL + `/becas-proyectos/${autAccesoID}`;
    return this.http.delete<BecasProyectosRespuesta>(url);
  }

}
