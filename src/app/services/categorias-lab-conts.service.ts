import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CategoriaLabCont,
  CategoriaLabContCreateDTO,
  CategoriaLabContPostRespuesta,
  CategoriaLabContRespuesta
} from '../interfaces/categorias-lab-conts.interface';


@Injectable({
  providedIn: 'root'
})
export class CategoriaLabContService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }


    getAll(): Observable<CategoriaLabContRespuesta> {
      const url = this.API_URL + `/categorias-trabajadores?pagination=false`;
      return this.http.get<CategoriaLabContRespuesta>(url);
    }

    getCategoriaLabContFromPage(page: number): Observable<CategoriaLabContRespuesta> {
      const url =
        this.API_URL +
        `/categorias-trabajadores?page=${page}&itemsPerPage=10&pagination=true`;
      return this.http.get<CategoriaLabContRespuesta>(url);
    }

    getCategoriaLabContByID(id: number): Observable<CategoriaLabCont> {
      const url = this.API_URL + `/categorias-trabajadores/${id}`;
      return this.http.get<CategoriaLabCont>(url);
    }

    getCategoriaLabContBy(
      campo: string,
      valueToSearch: string,
      page: number
    ): Observable<CategoriaLabContRespuesta> {
      let toSearch: string = '&' + campo + '=' + valueToSearch;

      const url =
        this.API_URL +
        `/categorias-trabajadores?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

      return this.http.get<CategoriaLabContRespuesta>(url);
    }

    create(
      newCategoriaLabCont: CategoriaLabContCreateDTO
    ): Observable<CategoriaLabContPostRespuesta> {
      const url = this.API_URL + `/categorias-trabajadores`;
      return this.http.post<CategoriaLabContPostRespuesta>(url, newCategoriaLabCont);
    }

    edit(
      ID: number,
      categoriaLabContToEdit: CategoriaLabContCreateDTO
    ): Observable<CategoriaLabContRespuesta> {
      const url = this.API_URL + `/categorias-trabajadores/${ID}`;
      return this.http.put<CategoriaLabContRespuesta>(url, categoriaLabContToEdit);
    }

    delete(ID: number) {
      const url = this.API_URL + `/categorias-trabajadores/${ID}`;
      return this.http.delete<CategoriaLabContRespuesta>(url);
    }

}
