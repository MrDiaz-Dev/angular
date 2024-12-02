import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TiposBecasRespuesta } from '../interfaces/p-dropdowns/tipos-becas.interface';


@Injectable({
  providedIn: 'root'
})
export class TipoBecasService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }


    getAll(): Observable<TiposBecasRespuesta> {
      const url = this.API_URL + `/tipos-becas?pagination=false&order[nombre]=asc`;
      return this.http.get<TiposBecasRespuesta>(url);
    }

}
