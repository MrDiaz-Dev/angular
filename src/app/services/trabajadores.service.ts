import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrabajadoresService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getTrabajadorPorIdPersona(idPersona: number): Observable<any> {
    const url =
      this.API_URL + `/per-trabajadores?actual=1&idPersona=${idPersona}`;
    return this.http.get<any>(url);
  }
  getTrabajador(id: number): Observable<any> {
    const url =
      this.API_URL + `/per-trabajadores/${id}`;
    return this.http.get<any>(url);
  }
}
