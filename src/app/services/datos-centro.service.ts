import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatosCentro, DatosCentroRespuesta } from '../interfaces/datos-centros.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosCentroService {

  constructor() { }

  private readonly http = inject(HttpClient);

  API_URL = environment.API_URL;

  getAll(): Observable<DatosCentroRespuesta> {
    const url = this.API_URL + `/datos-centros`;
    return this.http.get<DatosCentroRespuesta>(url);
  }

  paginated(urlParams: string): Observable<DatosCentroRespuesta> {
    const url = this.API_URL + `/datos-centros?${urlParams}`;
    return this.http.get<DatosCentroRespuesta>(url);
  }

  getByID(id: number): Observable<DatosCentro> {
    const url = this.API_URL + `/datos-centros/${id}`;
    return this.http.get<DatosCentro>(url);
  }

  create(data: any): Observable<DatosCentro> {
    const url = this.API_URL + `/datos-centros`;
    return this.http.post<DatosCentro>(url, data);
  }

  edit(id: number, data: any): Observable<DatosCentro> {
    const url = this.API_URL + `/datos-centros/${id}`;
    return this.http.put<DatosCentro>(url, data);
  }

  delete(id: number): Observable<DatosCentro> {
    const url = this.API_URL + `/datos-centros/${id}`;
    return this.http.delete<DatosCentro>(url);
  }

  deleteArray(IDs): Observable<DatosCentroRespuesta> {
    const url = this.API_URL + `/datos-centros/delete-array`;
    return this.http.post<DatosCentroRespuesta>(url, IDs);
  }
}
