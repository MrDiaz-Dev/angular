import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TiposTrabajadoresRespuesta} from '../interfaces/p-dropdowns/tipos-trabajadores.interface';


@Injectable({
  providedIn: 'root'
})
export class TipoTrabajadoresService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }


    getAll(): Observable<TiposTrabajadoresRespuesta> {
      const url = this.API_URL + `/tipos-trabajadores?pagination=false&order[nombre]=asc`;
      return this.http.get<TiposTrabajadoresRespuesta>(url);
    }

    getCategoriasTiposTrabajadores(): Observable<any> {
      const url = this.API_URL + `/categorias-tipos-trabajadores?pagination=false&order[nombre]=asc`;
      return this.http.get(url);
    }

}
