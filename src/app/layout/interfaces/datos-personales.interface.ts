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
  direccion2: string;
  cp2: string;
  localidad2: string;
  provincia2: string;
  telefono1: number;
  telefono2: string;
  emailPersonal: string;
  fotografia: string;
  nss: string;
  observaciones: string;
  activo: string;
  pendienteAct: string;
  pendienteDesact: string;
  personalCnb: string;
  falta: string;
  alertaGest: string;
  idPais: string;
  idPais2: string;
  responsables: string[];
  titulaciones: string[];
  numeroTarjeta: string;
}

export interface DatosPersonalesResponse {
  '@context': string;
  '@id': string;
  '@type': string;
  'hydra:member': DatosPersonales[];
  'hydra:totalItems': number;
}