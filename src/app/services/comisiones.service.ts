import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Comision, ComisionesRespuesta } from '../interfaces/comisiones.interface';
import { ConvenioRespuesta } from '../interfaces/convenio-id.interface';
import { Convenio, ConveniosRespuesta } from '../interfaces/convenios.interface';


@Injectable({
  providedIn: 'root'
})
export class ComisionesService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }

    edit( id: number, comision: Comision ): Observable<Comision>{
      const url = this.API_URL + `/comisiones/${id}`;
      return this.http.put<Comision>(url, comision);
    }
    delete( id: number): Observable<Comision>{
      const url = this.API_URL + `/comisiones/${id}`;
      return this.http.delete<Comision>(url);
    }

    create(data: Comision ){
      const url = this.API_URL + `/comisiones`;
      return this.http.post(url, data);
    }

    getComisiones(endpoint: string): Observable<ComisionesRespuesta> {
      console.log(endpoint);
      const url = this.API_URL + `/comisiones` + endpoint;
      return this.http.get<ComisionesRespuesta>(url);
    }

    getNumeroComision(idTrabajador): Observable<ComisionesRespuesta> {
      const url =
        this.API_URL +
        `/comisiones?page=1&itemsPerPage=1&properties[]=numero&idTrabajador.id=${idTrabajador}&order[numero]=desc`;
      return this.http.get<ComisionesRespuesta>(url);
    }

}
