import { IdNombre, Pais } from "./entidades.interface";

export interface DatosPersonales {
  id: number;
  tipoIdent: string;
  dniNie: string;
  fechaFinNie: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  sexo: string;
  fechaNacimiento: string;
  lugarNacimiento: string;
  direccion1: string;
  cp1: string;
  localidad1: string;
  provincia1: string;
  telefono1: number;
  emailPersonal: string;
  fotografia: string;
  nss: string;
  observaciones: string;
  activo: string;
  pendienteAct: string;
  pendienteDesact: string;
  personalCnb: string;
  falta: string;
  idPais: string | Pais;
  titulaciones: string[];
  numeroTarjeta: string;
}

export interface DatosPersonalesResponse {
  'hydra:member': DatosPersonales[];
  'hydra:totalItems': number;
}