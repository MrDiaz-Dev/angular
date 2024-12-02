import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  AseguradorCreateDTO,
  AseguradoresPostRespuesta,
  AseguradoresRespuesta,
} from '../interfaces/asegurador.interface';
import { Asegurador } from '../interfaces/per-funcionarios.interface';

@Injectable({
  providedIn: 'root',
})
export class AseguradoresService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAll(): Observable<AseguradoresRespuesta> {
    const url = this.API_URL + `/aseguradores?pagination=false&order[asegurador]=asc`;
    return this.http.get<AseguradoresRespuesta>(url);
  }

  paginated(urlParams: string): Observable<AseguradoresRespuesta> {
    const url = this.API_URL + `/aseguradores?${urlParams}`;
    return this.http.get<AseguradoresRespuesta>(url);
  }

  getAseguradoresFromPage(page: number): Observable<AseguradoresRespuesta> {
    const url =
      this.API_URL +
      `/aseguradores?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<AseguradoresRespuesta>(url);
  }

  getAseguradoresByID(id: number): Observable<Asegurador> {
    const url = this.API_URL + `/aseguradores/${id}`;
    return this.http.get<Asegurador>(url);
  }

  getAseguradoresBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<AseguradoresRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/aseguradores?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<AseguradoresRespuesta>(url);
  }

  create(
    newAsegurador: AseguradorCreateDTO
  ): Observable<AseguradoresPostRespuesta> {
    const url = this.API_URL + `/aseguradores`;
    return this.http.post<AseguradoresPostRespuesta>(url, newAsegurador);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: AseguradorCreateDTO
  ): Observable<AseguradoresRespuesta> {
    const url = this.API_URL + `/aseguradores/${ID}`;
    return this.http.put<AseguradoresRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/aseguradores/${ID}`;
    return this.http.delete<AseguradoresRespuesta>(url);
  }

  deleteArray(IDs: any) {
    const url = this.API_URL + `/aseguradores/delete-array`;
    return this.http.post<AseguradoresRespuesta>(url, IDs);
  }
}
