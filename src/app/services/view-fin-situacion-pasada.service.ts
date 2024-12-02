import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ViewFinSituacionPasadaRespuesta } from '../interfaces/view-fin-situacion-pasada';


@Injectable({
  providedIn: 'root'
})
export class ViewFinSituacionPasadaService {

  private API_URL= environment.API_URL;

    constructor(private http: HttpClient) { }


    getFechaFinSituacionLaboral(endpoint: string): Observable<ViewFinSituacionPasadaRespuesta> {
      const url = this.API_URL + `/view-fin-situacion-pasadas` + endpoint;;
      return this.http.get<ViewFinSituacionPasadaRespuesta>(url);
    }

}
