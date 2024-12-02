import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TiposBajasRespuesta } from '../interfaces/tipos_bajas.interface';

@Injectable({
  providedIn: 'root',
})
export class TiposBajasService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  paginated(urlParams: string): Observable<TiposBajasRespuesta> {
    const url = this.API_URL + `/tipos-bajas?${urlParams}`;
    return this.http.get<TiposBajasRespuesta>(url);
  }

  getAll(): Observable<TiposBajasRespuesta> {
    const url = this.API_URL + `/tipos-bajas?pagination=false&order[nombre]=asc`;
    return this.http.get<TiposBajasRespuesta>(url);
  }

  getByID(id: number): Observable<TiposBajasRespuesta> {
    const url = this.API_URL + `/tipos-bajas/${id}`;
    return this.http.get<TiposBajasRespuesta>(url);
  }

  create(data) {
    const url = this.API_URL + `/tipos-bajas`;
    return this.http.post(url, data);
  }

  edit(id: number, data) {
    const url = this.API_URL + `/tipos-bajas/${id}`;
    return this.http.put(url, data);
  }

  delete(id: number) {
    const url = this.API_URL + `/tipos-bajas/${id}`;
    return this.http.delete(url);
  }

  deleteArray(IDs): Observable<TiposBajasRespuesta> {
    const url = this.API_URL + `/tipos-bajas/delete-array`;
    return this.http.post<TiposBajasRespuesta>(url, IDs);
  }
}
