import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pais, PaisesResponse } from '../layout/interfaces/entidades.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor() { }

  // region servicios y otras dependencias

  private http = inject(HttpClient);

  // region variables

  readonly API_URL = environment.API_URL;

  // region metodos

  getAll(): Observable<PaisesResponse> {
    const url = `${this.API_URL}/paises?pagination=false&order[nombre]=asc`;
    return this.http.get<PaisesResponse>(url);
  }

  get(id: number): Observable<Pais> {
    const url = `${this.API_URL}/paises/${id}`;
    return this.http.get<Pais>(url);
  }

  paginated(urlParams: string): Observable<PaisesResponse> {
    const url = `${this.API_URL}/paises?${urlParams}`;
    return this.http.get<PaisesResponse>(url);
  }

  create(data: Pais): Observable<Pais> {
    const url = `${this.API_URL}/paises`;
    return this.http.post<Pais>(url, data);
  }

  edit(id: number, data: Pais): Observable<Pais> {
    const url = `${this.API_URL}/paises/${id}`;
    return this.http.put<Pais>(url, data);
  }

  delete(id: number): Observable<void> {
    const url = `${this.API_URL}/paises/${id}`;
    return this.http.delete<void>(url);
  }
}
