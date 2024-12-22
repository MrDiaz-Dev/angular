export interface IdNombre {
  id: number;
  nombre?: string;
}

export interface AreaFuncional extends IdNombre {}

export interface AreaFuncionalResponse {
  'hydra:member': AreaFuncional[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface BajaMedica {
  id: number;
  idTipo?: number;
  idNumEstado?: number;
  tipo?: TipoBaja;
  hospitalizacion?: string;
  diasHosp?: number;
  fechaInicio?: Date;
  fechaFin?: Date;
  baseCot?: string;
  idPersona: DatosPersonales;
}

export interface BajaMedicaResponse {
  'hydra:member': BajaMedica[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface CategoriaTrabajador extends IdNombre {}

export interface CategoriaTrabajadorResponse {
  'hydra:member': CategoriaTrabajador[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface CentroPertenencia extends IdNombre {}

export interface CentroPertenenciaResponse {
  'hydra:member': CentroPertenencia[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface Convenio extends IdNombre {}

export interface ConvenioResponse {
  'hydra:member': Convenio[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface CuentaCargo {
  id: number;
  referencia?: string;
}

export interface CuentaCargoResponse {
  'hydra:member': CuentaCargo[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface DatosPersonales extends IdNombre {
  apellido1?: string;
  apellido2?: string;
  dniNie?: string;
}

export interface DatosPersonalesResponse {
  'hydra:member': DatosPersonales[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface Departamento {
  idDepto: number;
  nombre?: string;
  codigo?: number;
}

export interface DepartamentoResponse {
  'hydra:member': Departamento[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface FuenteFinanciacion extends IdNombre {}

export interface FuenteFinanciacionResponse {
  'hydra:member': FuenteFinanciacion[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface GrupoSalarial extends IdNombre {}

export interface GrupoSalarialResponse {
  'hydra:member': GrupoSalarial[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface Laboratorio {
  idLab: number;
  nombre?: string;
}

export interface LaboratorioResponse {
  'hydra:member': Laboratorio[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface Proyecto extends IdNombre {
  referencia?: string;
}

export interface ProyectoResponse {
  'hydra:member': Proyecto[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface Servicio {
  idServ: number;
  nombre?: string;
}

export interface ServicioResponse {
  'hydra:member': Servicio[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface TipoBaja extends IdNombre {}

export interface TipoBajaResponse {
  'hydra:member': TipoBaja[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface TipoContrato extends IdNombre {}

export interface TipoContratoResponse {
  'hydra:member': TipoContrato[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface TipoJornada extends IdNombre {}

export interface TipoJornadaResponse {
  'hydra:member': TipoJornada[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface TipoLaboralSubv extends IdNombre {}

export interface TipoLaboralSubvResponse {
  'hydra:member': TipoLaboralSubv[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface TipoPractica extends IdNombre {}

export interface TipoPracticaResponse {
  'hydra:member': TipoPractica[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface Titulacion extends IdNombre {}

export interface TitulacionResponse {
  'hydra:member': Titulacion[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface Universidad extends IdNombre {}

export interface UniversidadResponse {
  'hydra:member': Universidad[];
  'hydra:totalItems': number;
}

// -------------------------------------------------------------------

export interface Pais {
  idPais: number;
  nombre?: string;
}

export interface PaisesResponse {
  'hydra:member': Pais[];
  'hydra:totalItems': number;
}