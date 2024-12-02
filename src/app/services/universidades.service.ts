import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Universidad, UniversidadesRespuesta } from '../interfaces/universidades';

@Injectable({
  providedIn: 'root'
})
export class UniversidadesService {

  constructor() { }

  private readonly http = inject(HttpClient);

  API_URL = environment.API_URL;

  getAll(): Observable<UniversidadesRespuesta> {
    const url = this.API_URL + `/universidades?pagination=false&order[nombre]=asc`;
    return this.http.get<UniversidadesRespuesta>(url);
  }

  paginated(urlParams: string): Observable<UniversidadesRespuesta> {
    const url = this.API_URL + `/universidades?${urlParams}`;
    return this.http.get<UniversidadesRespuesta>(url);
  }

  getByID(id: number): Observable<Universidad> {
    const url = this.API_URL + `/universidades/${id}`;
    return this.http.get<Universidad>(url);
  }

  create(data: any): Observable<Universidad> {
    const url = this.API_URL + `/universidades`;
    return this.http.post<Universidad>(url, data);
  }

  edit(id: number, data: any): Observable<Universidad> {
    const url = this.API_URL + `/universidades/${id}`;
    return this.http.put<Universidad>(url, data);
  }

  delete(id: number): Observable<Universidad> {
    const url = this.API_URL + `/universidades/${id}`;
    return this.http.delete<Universidad>(url);
  }

  deleteArray(IDs): Observable<UniversidadesRespuesta> {
    const url = this.API_URL + `/universidades/delete-array`;
    return this.http.post<UniversidadesRespuesta>(url, IDs);
  }
}
