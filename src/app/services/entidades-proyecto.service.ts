import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { EntidadProyecto, EntidadProyectoCreateDTO, EntidadProyectoPostRespuesta, EntidadProyectoRespuesta } from '../interfaces/entidades-proyecto.interface';


@Injectable({
  providedIn: 'root'
})
export class EntidadProyectoService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }


    getAll(): Observable<EntidadProyectoRespuesta> {
      const url = this.API_URL + `/entidades-proyectos?pagination=false`;
      return this.http.get<EntidadProyectoRespuesta>(url);
    }

    getEntidadProyectoFromPage(page: number): Observable<EntidadProyectoRespuesta> {
      const url =
        this.API_URL +
        `/entidades-proyectos?page=${page}&itemsPerPage=10&pagination=true`;
      return this.http.get<EntidadProyectoRespuesta>(url);
    }
  
    getEntidadProyectoByID(id: number): Observable<EntidadProyecto> {
      const url = this.API_URL + `/entidades-proyectos/${id}`;
      return this.http.get<EntidadProyecto>(url);
    }
  
    getEntidadProyectoBy(
      campo: string,
      valueToSearch: string,
      page: number
    ): Observable<EntidadProyectoRespuesta> {
      let toSearch: string = '&' + campo + '=' + valueToSearch;
  
      const url =
        this.API_URL +
        `/entidades-proyectos?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;
  
      return this.http.get<EntidadProyectoRespuesta>(url);
    }
  
    create(
      newEntidadProyecto: EntidadProyectoCreateDTO
    ): Observable<EntidadProyectoPostRespuesta> {
      const url = this.API_URL + `/entidades-proyectos`;
      return this.http.post<EntidadProyectoPostRespuesta>(url, newEntidadProyecto);
    }
  
    edit(
      ID: number,
      categoriaEquipoToEdit: EntidadProyectoCreateDTO
    ): Observable<EntidadProyectoRespuesta> {
      const url = this.API_URL + `/entidades-proyectos/${ID}`;
      return this.http.put<EntidadProyectoRespuesta>(url, categoriaEquipoToEdit);
    }
  
    delete(ID: number) {
      const url = this.API_URL + `/entidades-proyectos/${ID}`;
      return this.http.delete<EntidadProyectoRespuesta>(url);
    }

}
