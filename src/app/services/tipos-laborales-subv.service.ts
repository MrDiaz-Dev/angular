import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  TipoLaboralesSubv,
  TiposLaboralesSubvCreateDTO,
  TiposLaboralesSubvPostRespuesta,
  TiposLaboralesSubvRespuesta,
} from '../interfaces/tipos-laborales-subv.interface';

@Injectable({
  providedIn: 'root',
})
export class TiposLaboralesSubvService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  paginated(urlParams: string): Observable<TiposLaboralesSubvRespuesta> {
    const url = this.API_URL + `/tipos-laborales-subvs?${urlParams}`;
    return this.http.get<TiposLaboralesSubvRespuesta>(url);
  }

  getById(id: number): Observable<TipoLaboralesSubv> {
    const url = this.API_URL + `/tipos-laborales-subvs/${id}`;
    return this.http.get<TipoLaboralesSubv>(url);
  }

  getAll(): Observable<TiposLaboralesSubvRespuesta> {
    const url = this.API_URL + `/tipos-laborales-subvs?pagination=false&order[nombre]=asc`;
    return this.http.get<TiposLaboralesSubvRespuesta>(url);
  }

  getTiposLaboralesSubvFromPage(
    page: number
  ): Observable<TiposLaboralesSubvRespuesta> {
    const url =
      this.API_URL +
      `/tipos-laborales-subvs?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<TiposLaboralesSubvRespuesta>(url);
  }

  getTiposLaboralesSubvByID(id: number): Observable<TipoLaboralesSubv> {
    const url = this.API_URL + `/tipos-laborales-subvs/${id}`;
    return this.http.get<TipoLaboralesSubv>(url);
  }

  getTiposLaboralesSubvBy(
    campo: string,
    valueToSearch: string,
    page: number
  ): Observable<TiposLaboralesSubvRespuesta> {
    let toSearch: string = '&' + campo + '=' + valueToSearch;

    const url =
      this.API_URL +
      `/tipos-laborales-subvs?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<TiposLaboralesSubvRespuesta>(url);
  }

  create(
    newTiposLaboralesSubv: TiposLaboralesSubvCreateDTO
  ): Observable<TiposLaboralesSubvPostRespuesta> {
    const url = this.API_URL + `/tipos-laborales-subvs`;
    return this.http.post<TiposLaboralesSubvPostRespuesta>(
      url,
      newTiposLaboralesSubv
    );
  }

  edit(
    ID: number,
    categoriaEquipoToEdit: TiposLaboralesSubvCreateDTO
  ): Observable<TiposLaboralesSubvRespuesta> {
    const url = this.API_URL + `/tipos-laborales-subvs/${ID}`;
    return this.http.put<TiposLaboralesSubvRespuesta>(
      url,
      categoriaEquipoToEdit
    );
  }

  delete(ID: number) {
    const url = this.API_URL + `/tipos-laborales-subvs/${ID}`;
    return this.http.delete<TiposLaboralesSubvRespuesta>(url);
  }

  deleteArray(IDs): Observable<TiposLaboralesSubvRespuesta> {
    const url = this.API_URL + `/tipos-laborales-subvs/delete-array`;
    return this.http.post<TiposLaboralesSubvRespuesta>(url, IDs);
  }
}
