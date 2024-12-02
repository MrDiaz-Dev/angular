import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ContactosEmpresa, ContactosEmpresaCreateDTO, ContactosEmpresaPostRespuesta, ContactosEmpresaRespuesta } from '../interfaces/contactos-empresas.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactosEmpresasService  {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }

  getContactosEmpresaFromPage(page: number): Observable<ContactosEmpresaRespuesta> {
    const url =
      this.API_URL +
      `/contactos-empresas?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<ContactosEmpresaRespuesta>(url);
  }

  getContactosEmpresaByID(id: number): Observable<ContactosEmpresa> {
    const url = this.API_URL + `/contactos-empresas/${id}`;
    return this.http.get<ContactosEmpresa>(url);
  }

  getContactosEmpresaBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<ContactosEmpresaRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/contactos-empresas?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<ContactosEmpresaRespuesta>(url);
  }

  create(
    newContactosEmpresa: ContactosEmpresaCreateDTO
  ): Observable<ContactosEmpresaPostRespuesta> {
    const url = this.API_URL + `/contactos-empresas`;
    return this.http.post<ContactosEmpresaPostRespuesta>(url, newContactosEmpresa);
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: ContactosEmpresaCreateDTO
  ): Observable<ContactosEmpresaRespuesta> {
    const url = this.API_URL + `/contactos-empresas/${ID}`;
    return this.http.put<ContactosEmpresaRespuesta>(url, categoriaEquipoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/contactos-empresas/${ID}`;
    return this.http.delete<ContactosEmpresaRespuesta>(url);
  }

}
