import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CargosSeguridadRespuesta } from '../interfaces/cargos-seguridad.interface';


@Injectable({
  providedIn: 'root'
})
export class CargosSeguridadService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }


    getAll(): Observable<CargosSeguridadRespuesta> {
      const url = this.API_URL + `/cargos-seguridads?pagination=false&order[nombre]=asc`;
      return this.http.get<CargosSeguridadRespuesta>(url);
    }

}
