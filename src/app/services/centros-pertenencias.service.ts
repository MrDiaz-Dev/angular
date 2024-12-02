import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CentrosPertenencias, CentrosPertenenciasRespuesta } from '../interfaces/centros-pertenencias';

@Injectable({
  providedIn: 'root'
})
export class CentrosPertenenciasService {

  constructor() { }

  private readonly http = inject(HttpClient);

  API_URL = environment.API_URL;

  getAll(): Observable<CentrosPertenenciasRespuesta> {
    const url = this.API_URL + `/centros-pertenencias?pagination=false&order[nombre]=asc`;
    return this.http.get<CentrosPertenenciasRespuesta>(url);
  }

  paginated(urlParams: string): Observable<CentrosPertenenciasRespuesta> {
    const url = this.API_URL + `/centros-pertenencias?${urlParams}`;
    return this.http.get<CentrosPertenenciasRespuesta>(url);
  }

  getByID(id: number): Observable<CentrosPertenencias> {
    const url = this.API_URL + `/centros-pertenencias/${id}`;
    return this.http.get<CentrosPertenencias>(url);
  }

  create(data: any): Observable<CentrosPertenencias> {
    const url = this.API_URL + `/centros-pertenencias`;
    return this.http.post<CentrosPertenencias>(url, data);
  }

  edit(id: number, data: any): Observable<CentrosPertenencias> {
    const url = this.API_URL + `/centros-pertenencias/${id}`;
    return this.http.put<CentrosPertenencias>(url, data);
  }

  delete(id: number): Observable<CentrosPertenencias> {
    const url = this.API_URL + `/centros-pertenencias/${id}`;
    return this.http.delete<CentrosPertenencias>(url);
  }

  deleteArray(IDs): Observable<CentrosPertenenciasRespuesta> {
    const url = this.API_URL + `/centros-pertenencias/delete-array`;
    return this.http.post<CentrosPertenenciasRespuesta>(url, IDs);
  }
}
