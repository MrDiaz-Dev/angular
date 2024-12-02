import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Seguro } from '../interfaces/seguros.interace';

@Injectable({
  providedIn: 'root',
})
export class SegurosService {
  constructor() {}

  private readonly http = inject(HttpClient);

  API_URL = environment.API_URL;

  getAll(): Observable<Seguro> {
    const url = this.API_URL + '/seguros?pagination=false';
    return this.http.get<Seguro>(url);
  }

  getByID(id: number): Observable<Seguro> {
    const url = this.API_URL + `/seguros/${id}`;
    return this.http.get<Seguro>(url);
  }

  paginated(urlParams: string): Observable<Seguro> {
    const url = this.API_URL + `/seguros?${urlParams}`;
    return this.http.get<Seguro>(url);
  }

  create(data: Seguro): Observable<Seguro> {
    const url = this.API_URL + '/seguros';
    return this.http.post<Seguro>(url, data);
  }

  edit(id, data: Seguro): Observable<Seguro> {
    const url = this.API_URL + `/seguros/${id}`;
    return this.http.put<Seguro>(url, data);
  }

  delete(id: number): Observable<Seguro> {
    const url = this.API_URL + `/seguros/${id}`;
    return this.http.delete<Seguro>(url);
  }

  deleteArray(IDs): Observable<Seguro> {
    const url = this.API_URL + `/seguros/delete-array`;
    return this.http.post<Seguro>(url, IDs);
  }
}
