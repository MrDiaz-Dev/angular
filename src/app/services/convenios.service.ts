import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Convenio, ConveniosRespuesta } from '../interfaces/convenios.interface';


@Injectable({
  providedIn: 'root'
})
export class ConveniosService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }

    getById( id: number): Observable<Convenio> {
      const url = this.API_URL + `/convenios/${id}`;
      return this.http.get<Convenio>(url);
    }

    edit( id: number, convenio: Convenio ): Observable<Convenio>{
      const url = this.API_URL + `/convenios/${id}`;
      return this.http.put<Convenio>(url, convenio);
    }

    delete( id: number): Observable<Convenio>{
      const url = this.API_URL + `/convenios/${id}`;
      return this.http.delete<Convenio>(url);
    }

    create(convenio: Convenio ){
      const url = this.API_URL + `/convenios`;
      return this.http.post(url, convenio);
    }

    getBusqueda(endpoint: string): Observable<ConveniosRespuesta> {
      const url = this.API_URL + `/convenios` + endpoint;
      return this.http.get<ConveniosRespuesta>(url);
    }

    getAll(): Observable<ConveniosRespuesta> {
      const url = this.API_URL + `/convenios?pagination=false&order[referencia]=asc`;
      return this.http.get<ConveniosRespuesta>(url);
    }

}
