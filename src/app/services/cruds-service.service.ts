import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudsServiceService {

  private API_URL= environment.API_URL;
  private ENTITY_URL;

  constructor(
    private http: HttpClient
  ) {}

  setURL(url: string) {
    this.ENTITY_URL = url;
    console.log(this.ENTITY_URL);
  }
  
  getAll(): Observable<any> {
    const url =
      this.API_URL +
      `/${this.ENTITY_URL}?`;
    return this.http.get<any>(url);
  }

  getFromPage(page: number): Observable<any> {
    const url =
      this.API_URL +
      `/${this.ENTITY_URL}?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<any>(url);
  }

  getByID(id: number): Observable<any> {
    const url = this.API_URL + `/${this.ENTITY_URL}?/${id}`;
    return this.http.get<any>(url);
  }

  getBy(
    campo: string,
    valueToSearch: string,
    page: number,
    SecondValueforFecha?: string,
    isFecha: boolean = false
  ): Observable<any> {
    let toSearch: string;
    let dateAfterToSearch: string = '';
    let dateBeforeToSearch: string = '';

    if (isFecha){
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
      `/${this.ENTITY_URL}?page=${page}&itemsPerPage=10&pagination=true${toSearch}`;

    return this.http.get<any>(url);
  }

  create(
    newany: any
  ): Observable<any> {
    const url = this.API_URL + `/${this.ENTITY_URL}?`;
    return this.http.post<any>(url, newany);
  }

  edit(
    ID: any,
    ToEdit: any
  ): Observable<any> {
    const url = this.API_URL + `/${this.ENTITY_URL}?/${ID}`;
    return this.http.put<any>(url, ToEdit);
  }

  delete(ID: number) {
    const url = this.API_URL + `/${this.ENTITY_URL}?/${ID}`;
    return this.http.delete<any>(url);
  }
}
