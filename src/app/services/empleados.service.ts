import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { EmpleadosRepuesta } from '../interfaces/empleado.interface';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  
  private API_URL= environment.API_URL;
  
  constructor( private http: HttpClient) {}
  
  buscarFinSituacionPasada (): Observable<EmpleadosRepuesta> {
    
    const url = `${this.API_URL}/busqueda-fin-situacion-pasada`;
    return this.http.get<EmpleadosRepuesta>(url);
  }
  
  buscarFinSituacionSinNombre (): Observable<EmpleadosRepuesta> {
    
    const url = `${this.API_URL}/busqueda-fin-situacion-sin_nombre`;
    return this.http.get<EmpleadosRepuesta>(url);
    
  }
  
  buscarFinNie (): Observable<EmpleadosRepuesta> {
    
    const url = `${this.API_URL}/busqueda-fin-nie`;
    return this.http.get<EmpleadosRepuesta>(url);
    
  }
  
  buscarNumeroPendDesact (): Observable<EmpleadosRepuesta> {
    
    const url = `${this.API_URL}/busqueda-numero-pendiente-desactivar`;
    return this.http.get<EmpleadosRepuesta>(url);
    
  }
  
  buscarJubilacion (): Observable<EmpleadosRepuesta> {
    
    const url = `${this.API_URL}/busqueda-jubilacion`;
    return this.http.get<EmpleadosRepuesta>(url);
    
  }
  
  buscarFinSituacionFinanciacion(): Observable<EmpleadosRepuesta> {
    
    const url = `${this.API_URL}/per_laborales/busqueda_fin_situacion_financiacion`;
    return this.http.get<EmpleadosRepuesta>(url);
    
  }
  
  buscarFechaAlarma(): Observable<EmpleadosRepuesta> {
    
    const url = `${this.API_URL}/busqueda-fecha-alarma`;
    return this.http.get<EmpleadosRepuesta>(url);
    
  }
  
  buscarFin(): Observable<EmpleadosRepuesta> {
    
    const url = `${this.API_URL}/busqueda-fin`;
    return this.http.get<EmpleadosRepuesta>(url);
    
  }
  
}