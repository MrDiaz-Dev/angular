import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PatentesEmpresa, PatentesEmpresaCreateDTO, PatentesEmpresaPostRespuesta, PatentesEmpresaRespuesta } from '../interfaces/patentes-empresas.interface';

@Injectable({
  providedIn: 'root'
})
export class PatentesEmpresasService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }

  getPatentesEmpresaFromPage(page: number): Observable<PatentesEmpresaRespuesta> {
    const url =
      this.API_URL +
      `/patentes-empresas?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<PatentesEmpresaRespuesta>(url);
  }

  getPatentesEmpresaByID(id: number): Observable<PatentesEmpresa> {
    const url = this.API_URL + `/patentes-empresas/${id}`;
    return this.http.get<PatentesEmpresa>(url);
  }

  getPatentesEmpresaBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<PatentesEmpresaRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/patentes-empresas?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<PatentesEmpresaRespuesta>(url);
  }

  create(
    newPatentesEmpresa: PatentesEmpresaCreateDTO
  ): Observable<PatentesEmpresaPostRespuesta> {
    const url = this.API_URL + `/patentes-empresas`;
    return this.http.post<PatentesEmpresaPostRespuesta>(url, newPatentesEmpresa);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: PatentesEmpresaCreateDTO
  ): Observable<PatentesEmpresaRespuesta> {
    const url = this.API_URL + `/patentes-empresas/${ID}`;
    return this.http.put<PatentesEmpresaRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/patentes-empresas/${ID}`;
    return this.http.delete<PatentesEmpresaRespuesta>(url);
  }

}
