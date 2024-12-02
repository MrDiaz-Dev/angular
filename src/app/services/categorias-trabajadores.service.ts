import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { 
  CategoriaTrabajador, 
  CategoriaTrabajadorCreateDTO, 
  CategoriaTrabajadorPostRespuesta, 
  CategoriaTrabajadorRespuesta 
} from '../interfaces/categorias-trabajadores.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriasTrabajadorService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}
  
  paginated(urlParams: string): Observable<CategoriaTrabajadorRespuesta> {
    const url = this.API_URL + `/categorias-trabajadores?${urlParams}`;
    return this.http.get<CategoriaTrabajadorRespuesta>(url);
  }

  getCategoriaTrabajadorFromPage(page: number): Observable<CategoriaTrabajadorRespuesta> {
    const url =
      this.API_URL +
      `/categorias-trabajadores?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<CategoriaTrabajadorRespuesta>(url);
  }

  getCategoriaTrabajadorByID(id: number): Observable<CategoriaTrabajador> {
    const url = this.API_URL + `/categorias-trabajadores/${id}`;
    return this.http.get<CategoriaTrabajador>(url);
  }

  getCategoriaTrabajadorBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<CategoriaTrabajadorRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/categorias-trabajadores?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<CategoriaTrabajadorRespuesta>(url);
  }

  create(
    newCategoriaTrabajador: CategoriaTrabajadorCreateDTO
  ): Observable<CategoriaTrabajadorPostRespuesta> {
    const url = this.API_URL + `/categorias-trabajadores`;
    return this.http.post<CategoriaTrabajadorPostRespuesta>(url, newCategoriaTrabajador);
  }

  edit(
    ID: number,
    categoriaTrabajadorToEdit: CategoriaTrabajadorCreateDTO
  ): Observable<CategoriaTrabajadorRespuesta> {
    const url = this.API_URL + `/categorias-trabajadores/${ID}`;
    return this.http.put<CategoriaTrabajadorRespuesta>(url, categoriaTrabajadorToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/categorias-trabajadores/${ID}`;
    return this.http.delete<CategoriaTrabajadorRespuesta>(url);
  }

  deleteArray(IDs): Observable<CategoriaTrabajadorRespuesta> {
    const url = this.API_URL + `/categorias-trabajadores/delete-array`;
    return this.http.post<CategoriaTrabajadorRespuesta>(url, IDs);
  }
}
