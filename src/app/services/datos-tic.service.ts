import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosTic, DatosTicRespuesta } from '../layout/interfaces/datos-tic.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DatosTicService {

  constructor() { }

  // region servicios y otras dependencias

  private http = inject(HttpClient);

  // region variables

  readonly API_URL = environment.API_URL;

  // region metodos

  get(): Observable<DatosTicRespuesta> {
    const url = this.API_URL + `/datos-tics`;
    return this.http.get<DatosTicRespuesta>(url);
  }

  getById(id: number): Observable<DatosTic> {
    const url = this.API_URL + `/datos-tics/${id}`;
    return this.http.get<DatosTic>(url);
  }

  getEmailCNB(idPersona: number): Promise<string> {
    return new Promise((resolve) => {
      this.getById(idPersona).subscribe({
        next: (datosTic) => {
          resolve(datosTic.emailCnb);
        },
        error: (error) => {
          // console.error(error);
          resolve('');
        },
      });
    });
  }

  edit(id: number, datosTic: DatosTic): Observable<DatosTic> {
    const url = this.API_URL + `/datos-tics/${id}`;
    return this.http.put<DatosTic>(url, datosTic);
  }
}
