import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CuentaCargo, CuentaCargoCreateDTO, CuentasCargoRespuesta } from '../interfaces/cuentas-cargo.interface';


@Injectable({
  providedIn: 'root'
})
export class CuentasCargoService {

  private API_URL= environment.API_URL;


    constructor(private http: HttpClient) { }


    getById( id: number): Observable<CuentaCargo> {
      const url = this.API_URL + `/cuentas-cargos/${id}`;
      return this.http.get<CuentaCargo>(url);
    }

    edit( id: number, cuenta: CuentaCargo | CuentaCargoCreateDTO ): Observable<CuentaCargo>{
      const url = this.API_URL + `/cuentas-cargos/${id}`;
      return this.http.put<CuentaCargo>(url, cuenta);
    }

    delete( id: number): Observable<CuentaCargo>{
      const url = this.API_URL + `/cuentas-cargos/${id}`;
      return this.http.delete<CuentaCargo>(url);
    }

    create(cuenta: CuentaCargo | CuentaCargoCreateDTO ){
      const url = this.API_URL + `/cuentas-cargos`;
      return this.http.post(url, cuenta);
    }

    getBusqueda(endpoint: string): Observable<CuentasCargoRespuesta> {
      const url = this.API_URL + `/cuentas-cargos` + endpoint;
      return this.http.get<CuentasCargoRespuesta>(url);
    }

    getAll(): Observable<CuentasCargoRespuesta> {
      const url = this.API_URL + `/cuentas-cargos?pagination=false&order[referencia]=asc`;
      return this.http.get<CuentasCargoRespuesta>(url);
    }

    getCuentasCargoBy(
      campo: string,
      valueToSearch: string,
      page: number,
      SecondValueforFecha?: string
    ): Observable<CuentasCargoRespuesta> {
      let toSearch: string;
      let dateAfterToSearch: string = '';
      let dateBeforeToSearch: string = '';
  
      if (campo === 'fechaInicio' || campo === 'fechaFin'){
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
        `/cuentas-cargos?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;
  
      return this.http.get<CuentasCargoRespuesta>(url);
    }

    getCuentasCargoFromPage(page: number): Observable<CuentasCargoRespuesta> {
      const url =
        this.API_URL +
        `/cuentas-cargos?page=${page}&itemsPerPage=10&pagination=true`;
      return this.http.get<CuentasCargoRespuesta>(url);
    }

}
