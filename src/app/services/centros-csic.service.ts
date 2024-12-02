import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CentrosCsic, CentrosCsicCreateDTO, CentrosCsicPostRespuesta, CentrosCsicRespuesta } from '../interfaces/centros-csic.interface';

@Injectable({
  providedIn: 'root'
})
export class CentrosCsicService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }


    getAll(): Observable<CentrosCsicRespuesta> {
      const url = this.API_URL + `/centros-csics?pagination=false&order[nombre]=asc`;
      return this.http.get<CentrosCsicRespuesta>(url);
    }

    getCentrosCsicFromPage(page: number): Observable<CentrosCsicRespuesta> {
      const url =
        this.API_URL +
        `/centros-csics?page=${page}&itemsPerPage=10&pagination=true`;
      return this.http.get<CentrosCsicRespuesta>(url);
    }
  
    getCentrosCsicByID(id: number): Observable<CentrosCsic> {
      const url = this.API_URL + `/centros-csics/${id}`;
      return this.http.get<CentrosCsic>(url);
    }
  
    getCentrosCsicBy(
      campo: string,
      valueToSearch: string,
      page: number
    ): Observable<CentrosCsicRespuesta> {
      let toSearch: string = '&' + campo + '=' + valueToSearch;
  
      const url =
        this.API_URL +
        `/centros-csics?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;
  
      return this.http.get<CentrosCsicRespuesta>(url);
    }
  
    create(
      newCentrosCsic: CentrosCsicCreateDTO
    ): Observable<CentrosCsicPostRespuesta> {
      const url = this.API_URL + `/centros-csics`;
      return this.http.post<CentrosCsicPostRespuesta>(url, newCentrosCsic);
    }
  
    edit(
      ID: number,
      categoriaEquipoToEdit: CentrosCsicCreateDTO
    ): Observable<CentrosCsicRespuesta> {
      const url = this.API_URL + `/centros-csics/${ID}`;
      return this.http.put<CentrosCsicRespuesta>(url, categoriaEquipoToEdit);
    }
  
    delete(ID: number) {
      const url = this.API_URL + `/centros-csics/${ID}`;
      return this.http.delete<CentrosCsicRespuesta>(url);
    }

}
