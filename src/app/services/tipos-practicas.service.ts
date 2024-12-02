import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TiposPracticas, TiposPracticasRespuesta } from '../interfaces/tipos-practicas';

@Injectable({
  providedIn: 'root'
})
export class TiposPracticasService {

  constructor() { }

  private readonly http = inject(HttpClient);

  API_URL = environment.API_URL;

  getAll(): Observable<TiposPracticasRespuesta> {
    const url = this.API_URL + `/tipos-practicas?pagination=false&order[nombre]=asc`;
    return this.http.get<TiposPracticasRespuesta>(url);
  }

  paginated(urlParams: string): Observable<TiposPracticasRespuesta> {
    const url = this.API_URL + `/tipos-practicas?${urlParams}`;
    return this.http.get<TiposPracticasRespuesta>(url);
  }

  getByID(id: number): Observable<TiposPracticas> {
    const url = this.API_URL + `/tipos-practicas/${id}`;
    return this.http.get<TiposPracticas>(url);
  }

  create(data: any): Observable<TiposPracticas> {
    const url = this.API_URL + `/tipos-practicas`;
    return this.http.post<TiposPracticas>(url, data);
  }

  edit(id: number, data: any): Observable<TiposPracticas> {
    const url = this.API_URL + `/tipos-practicas/${id}`;
    return this.http.put<TiposPracticas>(url, data);
  }

  delete(id: number): Observable<TiposPracticas> {
    const url = this.API_URL + `/tipos-practicas/${id}`;
    return this.http.delete<TiposPracticas>(url);
  }

  deleteArray(IDs): Observable<TiposPracticasRespuesta> {
    const url = this.API_URL + `/tipos-practicas/delete-array`;
    return this.http.post<TiposPracticasRespuesta>(url, IDs);
  }
}
