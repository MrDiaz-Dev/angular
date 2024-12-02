import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Empresa, EmpresasRespuesta } from '../interfaces/empresas.interface';
import { TrabEmpresa } from '../interfaces/trab-empresa.interface';

@Injectable({
  providedIn: 'root',
})
export class EmpresasService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  paginated(urlParams: string): Observable<EmpresasRespuesta> {
    const url = this.API_URL + `/empresas?${urlParams}`;
    return this.http.get<EmpresasRespuesta>(url);
  }

  getById(id: any): Observable<Empresa> {
    const url = this.API_URL + `/empresas/${id}`;
    return this.http.get<Empresa>(url);
  }

  getAll(): Observable<EmpresasRespuesta> {
    const url = this.API_URL + `/empresas?pagination=false&order[nombre]=asc`;
    return this.http.get<EmpresasRespuesta>(url);
  }

  create(data: Empresa): Observable<Empresa> {
    const url = this.API_URL + '/empresas';
    return this.http.post<Empresa>(url, data);
  }

  edit(id: string, data: Empresa): Observable<Empresa> {
    const url = this.API_URL + `/empresas/${id}`;
    return this.http.put<Empresa>(url, data);
  }

  delete(id: string): Observable<any> {
    const url = this.API_URL + `/empresas/${id}`;
    return this.http.delete(url);
  }

  deleteArray(IDs): Observable<any> {
    const url = this.API_URL + `/empresas/delete-array`;
    return this.http.post(url, IDs);
  }
}
