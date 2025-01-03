import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Titulacion, TitulacionResponse } from '../layout/interfaces/entidades.interface';

@Injectable({
  providedIn: 'root'
})
export class TitulacionesService {

  constructor() { }

  // region servicios y otras dependencias

  private http = inject(HttpClient);

  // region variables

  readonly API_URL = environment.API_URL;

  // region metodos

  getAll(): Observable<TitulacionResponse> {
    const url = `${this.API_URL}/titulaciones?pagination=false&order[nombre]=asc`;
    return this.http.get<TitulacionResponse>(url);
  }

  get(id: number): Observable<Titulacion> {
    const url = `${this.API_URL}/titulaciones/${id}`;
    return this.http.get<Titulacion>(url);
  }

  paginated(urlParams: string): Observable<TitulacionResponse> {
    const url = `${this.API_URL}/titulaciones?${urlParams}`;
    return this.http.get<TitulacionResponse>(url);
  }

  create(data: Titulacion): Observable<Titulacion> {
    const url = `${this.API_URL}/titulaciones`;
    return this.http.post<Titulacion>(url, data);
  }

  edit(id: number, data: Titulacion): Observable<Titulacion> {
    const url = `${this.API_URL}/titulaciones/${id}`;
    return this.http.put<Titulacion>(url, data);
  }

  delete(id: number): Observable<void> {
    const url = `${this.API_URL}/titulaciones/${id}`;
    return this.http.delete<void>(url);
  }
}
