import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CategoriaLabCont, CategoriasLabContRespuesta } from '../interfaces/categorias-lab-cont.interface';


@Injectable({
  providedIn: 'root'
})
export class CategoriasLabContService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }


    getById( id: number): Observable<CategoriaLabCont> {
      const url = this.API_URL + `/categorias-trabajadores/${id}`;
      return this.http.get<CategoriaLabCont>(url);
    }

    getAll(): Observable<CategoriasLabContRespuesta> {
      const url = this.API_URL + `/categorias-trabajadores?pagination=false&order[nombre]=asc`;
      return this.http.get<CategoriasLabContRespuesta>(url);
    }

}
