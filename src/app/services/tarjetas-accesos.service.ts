import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TarjetasAcceso, TarjetasAccesoCreateDTO, TarjetasAccesoPostRespuesta, TarjetasAccesosRespuesta } from '../interfaces/tarjetas-accesos.interface';


@Injectable({
  providedIn: 'root'
})
export class TarjetasAccesosService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }


    getById( id: number): Observable<TarjetasAcceso> {
      const url = this.API_URL + `/tarjetas-accesos/${id}`;
      return this.http.get<TarjetasAcceso>(url);
    }

    getAll(): Observable<TarjetasAccesosRespuesta> {
      const url = this.API_URL + `/tarjetas-accesos?pagination=false`;
      return this.http.get<TarjetasAccesosRespuesta>(url);
    }

    getTarjetasAccesoFromPage(page: number): Observable<TarjetasAccesosRespuesta> {
      const url =
        this.API_URL +
        `/tarjetas-accesos?page=${page}&itemsPerPage=10&pagination=true`;
      return this.http.get<TarjetasAccesosRespuesta>(url);
    }
  
    getTarjetasAccesoByID(id: number): Observable<TarjetasAcceso> {
      const url = this.API_URL + `/tarjetas-accesos/${id}`;
      return this.http.get<TarjetasAcceso>(url);
    }
  
    getTarjetasAccesoBy(
      campo: string,
      valueToSearch: string,
      page: number
    ): Observable<TarjetasAccesosRespuesta> {
      let toSearch: string = '&' + campo + '=' + valueToSearch;
  
      const url =
        this.API_URL +
        `/tarjetas-accesos?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;
  
      return this.http.get<TarjetasAccesosRespuesta>(url);
    }
  
    create(
      newTarjetasAcceso: TarjetasAccesoCreateDTO
    ): Observable<TarjetasAccesoPostRespuesta> {
      const url = this.API_URL + `/tarjetas-accesos`;
      return this.http.post<TarjetasAccesoPostRespuesta>(url, newTarjetasAcceso);
    }
  
    edit(
      ID: number,
      categoriaEquipoToEdit: TarjetasAccesoCreateDTO
    ): Observable<TarjetasAccesosRespuesta> {
      const url = this.API_URL + `/tarjetas-accesos/${ID}`;
      return this.http.put<TarjetasAccesosRespuesta>(url, categoriaEquipoToEdit);
    }
  
    delete(ID: number) {
      const url = this.API_URL + `/tarjetas-accesos/${ID}`;
      return this.http.delete<TarjetasAccesosRespuesta>(url);
    }

}
