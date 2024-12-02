import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// @ts-ignore
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  Laboratorio,
  LaboratorioCreateDTO,
  LaboratoriosPostRespuesta,
  LaboratoriosRespuesta,
} from '../interfaces/laboratorio.interface';

@Injectable({
  providedIn: 'root',
})
export class LaboratoriosService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getAll(): Observable<LaboratoriosRespuesta> {
    const url = this.API_URL + `/laboratorios?pagination=false&order[nombre]=asc`;
    return this.http.get<LaboratoriosRespuesta>(url);
  }

  paginated(urlParams: string): Observable<LaboratoriosRespuesta> {
    const url = this.API_URL + `/laboratorios?${urlParams}`;
    return this.http.get<LaboratoriosRespuesta>(url);
  }

  getlaboratorioId(id: number): Observable<Laboratorio> {
    const url = this.API_URL + `/laboratorios/${id}`;
    return this.http.get<Laboratorio>(url);
  }
  getPickList(): Observable<LaboratoriosRespuesta> {
    const url =
      this.API_URL +
      `/laboratorios?pagination=false&properties%5B%5D=idLab&properties%5B%5D=nombre`;
    return this.http.get<LaboratoriosRespuesta>(url);
  }
  getLabsFromPage(page: number): Observable<LaboratoriosRespuesta> {
    const url =
      this.API_URL +
      `/laboratorios?page=${page}&itemsPerPage=10&pagination=true`;
    return this.http.get<LaboratoriosRespuesta>(url);
  }

  edit(
    labID: number,
    LabToEdit: LaboratorioCreateDTO
  ): Observable<LaboratoriosRespuesta> {
    const url = this.API_URL + `/laboratorios/${labID}`;
    return this.http.put<LaboratoriosRespuesta>(url, LabToEdit);
  }

  create(
    newLab: LaboratorioCreateDTO
  ): Observable<LaboratoriosPostRespuesta> {
    const url = this.API_URL + `/laboratorios`;
    return this.http.post<LaboratoriosPostRespuesta>(url, newLab);
  }

  delete(labID: number): Observable<LaboratoriosRespuesta> {
    const url = this.API_URL + `/laboratorios/${labID}`;
    return this.http.delete<LaboratoriosRespuesta>(url);
  }

  deleteArray(IDs): Observable<LaboratoriosRespuesta> {
    const url = this.API_URL + `/laboratorios/delete-array`;
    return this.http.post<LaboratoriosRespuesta>(url, IDs);
  }
}
