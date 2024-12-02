import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  CategoriaTelefono, 
  CategoriaTelefonoCreateDTO, 
  CategoriaTelefonosPostRespuesta, 
  CategoriaTelefonosRespuesta 
} from '../interfaces/categorias-telefonos.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasTelefonosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getCategoriaTelefonosFromPage(page: number): Observable<CategoriaTelefonosRespuesta> {
    const url =
      this.API_URL +
      `/categorias-telefonos?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<CategoriaTelefonosRespuesta>(url);
  }

  getCategoriaTelefonosByID(id: number): Observable<CategoriaTelefono> {
    const url = this.API_URL + `/categorias-telefonos/${id}`;
    return this.http.get<CategoriaTelefono>(url);
  }

  getCategoriaTelefonosBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<CategoriaTelefonosRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/categorias-telefonos?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<CategoriaTelefonosRespuesta>(url);
  }

  create(
    newCategoriaTelefono: CategoriaTelefonoCreateDTO
  ): Observable<CategoriaTelefonosPostRespuesta> {
    const url = this.API_URL + `/categorias-telefonos`;
    return this.http.post<CategoriaTelefonosPostRespuesta>(url, newCategoriaTelefono);
  }

  edit(
    ID: number,
    categoriaTelefonoToEdit: CategoriaTelefonoCreateDTO
  ): Observable<CategoriaTelefonosRespuesta> {
    const url = this.API_URL + `/categorias-telefonos/${ID}`;
    return this.http.put<CategoriaTelefonosRespuesta>(url, categoriaTelefonoToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/categorias-telefonos/${ID}`;
    return this.http.delete<CategoriaTelefonosRespuesta>(url);
  }
}
