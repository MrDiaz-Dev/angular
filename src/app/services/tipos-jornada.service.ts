import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  TipoJornada,
  TiposJornadaCreateDTO,
  TiposJornadaPostRespuesta,
  TiposJornadaRespuesta,
} from '../interfaces/tipos-jornada.interface';

@Injectable({
  providedIn: 'root',
})
export class TiposJornadaService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  paginated(urlParams: string): Observable<TiposJornadaRespuesta> {
    const url = this.API_URL + `/tipos-jornadas?${urlParams}`;
    return this.http.get<TiposJornadaRespuesta>(url);
  }

  getById(id: number): Observable<TipoJornada> {
    const url = this.API_URL + `/tipos-jornadas/${id}`;
    return this.http.get<TipoJornada>(url);
  }

  getAll(tipoJornada: string): Observable<TiposJornadaRespuesta> {
    // TODO: segun el tipo nos trae unas u otras
    // http://rrhh.systemctl-service.com/api/tipos-jornadas?page=1&categoria.id=2
    const url =
      this.API_URL +
      `/tipos-jornadas?pagination=false&order[nombre]=asc&categoria.id=` +
      tipoJornada;
    return this.http.get<TiposJornadaRespuesta>(url);
  }

  getTiposJornadasFromPage(page: number): Observable<TiposJornadaRespuesta> {
    const url =
      this.API_URL +
      `/tipos-jornadas?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<TiposJornadaRespuesta>(url);
  }

  getTiposJornadasByID(id: number): Observable<TipoJornada> {
    const url = this.API_URL + `/tipos-jornadas/${id}`;
    return this.http.get<TipoJornada>(url);
  }

  getTiposJornadasBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string
  ): Observable<TiposJornadaRespuesta> {
    let toSearch: string;
    let dateAfterToSearch: string = '';
    let dateBeforeToSearch: string = '';

    if (campo === 'horaInicio' || campo === 'horaFin') {
      if (valueToSearch != '') {
        dateAfterToSearch = '&' + campo + '[after]=' + valueToSearch;
      }

      if (SecondValueforFecha != '') {
        dateBeforeToSearch = '&' + campo + '[before]=' + SecondValueforFecha;
      }
      toSearch = dateAfterToSearch + dateBeforeToSearch;
    } else {
      toSearch = '&' + campo + '=' + valueToSearch;
    }

    const url =
      this.API_URL +
      `/tipos-jornadas?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<TiposJornadaRespuesta>(url);
  }

  create(
    newTiposJornada: TiposJornadaCreateDTO
  ): Observable<TiposJornadaPostRespuesta> {
    const url = this.API_URL + `/tipos-jornadas`;
    return this.http.post<TiposJornadaPostRespuesta>(url, newTiposJornada);
  }

  edit(
    autAccesoID: number,
    autAccesoToEdit: TiposJornadaCreateDTO
  ): Observable<TiposJornadaRespuesta> {
    const url = this.API_URL + `/tipos-jornadas/${autAccesoID}`;
    return this.http.put<TiposJornadaRespuesta>(url, autAccesoToEdit);
  }

  delete(autAccesoID: number) {
    const url = this.API_URL + `/tipos-jornadas/${autAccesoID}`;
    return this.http.delete<TiposJornadaRespuesta>(url);
  }

  deleteArray(IDs): Observable<TiposJornadaRespuesta> {
    const url = this.API_URL + `/tipos-jornadas/delete-array`;
    return this.http.post<TiposJornadaRespuesta>(url, IDs);
  }
}
