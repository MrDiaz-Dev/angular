import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TiposTrabajador, TiposTrabajadorCreateDTO, TiposTrabajadorPostRespuesta, TiposTrabajadorRespuesta } from '../interfaces/tipos-trabajadores.interface';

@Injectable({
  providedIn: 'root'
})
export class TiposTrabajadoresService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }

  getTiposTrabajadorFromPage(page: number): Observable<TiposTrabajadorRespuesta> {
    const url =
      this.API_URL +
      `/tipos-trabajadores?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<TiposTrabajadorRespuesta>(url);
  }

  getTiposTrabajadorByID(id: number): Observable<TiposTrabajador> {
    const url = this.API_URL + `/tipos-trabajadores/${id}`;
    return this.http.get<TiposTrabajador>(url);
  }

  getTiposTrabajadorBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<TiposTrabajadorRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/tipos-trabajadores?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<TiposTrabajadorRespuesta>(url);
  }

  create(
    newTiposTrabajador: TiposTrabajadorCreateDTO
  ): Observable<TiposTrabajadorPostRespuesta> {
    const url = this.API_URL + `/tipos-trabajadores`;
    return this.http.post<TiposTrabajadorPostRespuesta>(url, newTiposTrabajador);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: TiposTrabajadorCreateDTO
  ): Observable<TiposTrabajadorRespuesta> {
    const url = this.API_URL + `/tipos-trabajadores/${ID}`;
    return this.http.put<TiposTrabajadorRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/tipos-trabajadores/${ID}`;
    return this.http.delete<TiposTrabajadorRespuesta>(url);
  }

  getAllFromCategoriaTipoTrabajador(idTipo: number): Observable<TiposTrabajadorRespuesta> {
    const url = this.API_URL + `/tipos-trabajadores?idCategoria=${idTipo}`;
    return this.http.get<TiposTrabajadorRespuesta>(url);
  }
}
