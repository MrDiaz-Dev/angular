import { DatosPersonales } from "./datos-personales.interface";
import { IdNombre } from "./entidades.interface";

export interface DatosComunes {
  id: number;
  fechaIngresoCnb: string;
  titulacion: string;
  fechaIngresoAge: string;
  trienios: number;
  extension: string;
  numTarjCnb: number;
  codTarjCnb: number;
  tarjProvisional: string;
  tarjActiva: string;
  accesoDenegado: string;
  fechaDenegacion: string;
  ocultarDenegacion: string;
  observacionesSeg: string;
  visibleWeb: string;
  urlWeb: string;
  observaciones: string;
  idPersona?: DatosPersonales | string;
  idTipo?: IdTipo | string;
  cargoSeg?: IdNombre | string;
}

export interface IdTipo {
  id: number;
  nombre: string;
  idCategoria: IdNombre;
}

export interface DatosComunesResponse {
  '@context': string;
  '@id': string;
  '@type': string;
  'hydra:member': DatosComunes[];
  'hydra:totalItems': number;
}