import { DatosPersonales } from './datos-personales.interface';
import {
  CategoriaTrabajador,
  TipoLaboralSubv,
  Titulacion,
  FuenteFinanciacion,
  TipoJornada,
  CuentaCargo,
  Laboratorio,
  Departamento,
  Servicio,
  GrupoSalarial,
  Convenio,
  AreaFuncional,
  Proyecto,
  Universidad,
  CentroPertenencia,
  TipoPractica,
} from './entidades.interface';

export interface Trabajador {
  id: number;
  tipoLaboral?: number;
  numRegistroPersonal?: string;
  rpt?: string;
  titulacion?: string;
  fechaConv?: string;
  fechaInicio?: string;
  fechaAntAlarma?: string;
  fechaFin?: string;
  fechaAlarma?: string;
  fechaJubilacion?: string;
  fechaJubilacionEf?: string;
  deceso?: string;
  fechaDeceso?: string;
  motivo?: string;
  observaciones?: string;
  tareas?: string;
  interino?: string;
  acabado?: string;
  emailEnviado?: number;
  financiacion?: string;
  porcentaje?: string;
  importeFinan?: string;
  indemSubv?: string;
  solaut?: number;
  createdAt?: string;
  updatedAt?: string;
  actual?: boolean;
  nivel?: string;
  fechaBaja?: string;
  seguro?: string;
  fechaFinSeguroAcc?: string;
  fechaFinSeguroRc?: string;
  tipo?: string;
  tipoJornada?: string;
  tipoBeca?: string;
  cuenta?: string;
  cuentaPerEst?: string;
  cuenta2?: string;
  categoria?: string;
  tipoPermiso2018?: string;
  idGrupo?: string | GrupoSalarial;
  idArea?: string | AreaFuncional;
  fuenteFinanciacion?: string;
  tipoLabSubv?: string;
  cuenta3?: string;
  denominacion?: string;
  idTipo?: string | idNombre;
  idCategoria?: string | CategoriaTrabajador;
  idProyecto?: string | Proyecto;
  idConvenio?: string | Convenio;
  idDepto?: string | Departamento;
  asegurador?: string;
  tipoPermiso?: string;
  idPersona?: string | DatosPersonales;
  idServicio?: string | Servicio;
  prorrogasTrabajadores?: string[];
  documentos?: string[];
  laboratorio?: string;
  adendaActiva?: string;
  fechaFinFinanciacion?: string;
  pagas?: number;
  tipoContrato?: string;
  tardes?: string;
  complementoSalarial?: string;
  responsable?: string;
  idTitulacion?: string | Titulacion;
  idUniversidad?: string | Universidad;
  idCentroPertenencia?: string | CentroPertenencia;
  idTipoPractica?: string | TipoPractica;
  fechaSentencia?: string;
  referenciaAyuda?: string;
  cofinanciacion?: string;
  seguroAcc?: string;
  seguroRc?: string;
  empresa?: string;
}

export interface TrabajadorResponse {
  'hydra:member': Trabajador[];
  'hydra:totalItems': number;
}


interface idNombre {
  id: number;
  nombre: string;
}

export interface PerLaboral {
  id: number;
  fechaInicio?: Date;
  fechaFin?: Date;

}

export interface PerLaboralConCargoProgramasSubvencionados {
  id: number;
  fechaConv?: Date;
  referenciaAyuda?: string;
  numRegistroPersonal?: string;
  categoria?: CategoriaTrabajador;
  tipoLabSubv?: TipoLaboralSubv;
  idTitulacion?: Titulacion;
  fuenteFinanciacion?: FuenteFinanciacion;
  cofinanciacion?: string;
  financiacion?: string;
  pagas?: string;
  tipoJornada?: TipoJornada;
  cuenta?: CuentaCargo;
  tardes?: string;
  complementoSalarial?: string;
  responsable?: DatosPersonales;
  laboratorio?: Laboratorio;
  idDepto?: Departamento;
  idServicio?: Servicio;
  observaciones?: string;
}

export interface PerLaboralConCargoProyecto {
  id: number;
  solaut?: number;
  fechaConv?: Date;
  diasVacaciones?: string;
  fuenteFinanciacion?: FuenteFinanciacion;
  financiacion?: string;
  porcentaje?: string;
  idArea?: AreaFuncional;
  idGrupo?: GrupoSalarial;
  idTitulacion?: Titulacion;
  tipoJornada?: TipoJornada;
  pagas?: number;
  idProyecto?: Proyecto;
  idConvenio?: Convenio;
  tareas?: string;
  responsable?: DatosPersonales;
  laboratorio?: Laboratorio;
  idDepto?: Departamento;
  idServicio?: Servicio;
  observaciones?: string;
}

export interface PerLaboralesFijos {
  id: number;
  fechaJubilacion?: Date;
  fechaJubilacionEf?: Date;
  numRegistroPersonal?: string;
  rpt?: string;
  complementoSalarial?: string;
  idArea?: AreaFuncional;
  idGrupo?: GrupoSalarial;
  idTitulacion?: Titulacion;
  tipoJornada?: TipoJornada;
  responsable?: DatosPersonales;
  laboratorio?: Laboratorio;
  idDepto?: Departamento;
  idServicio?: Servicio;
  observaciones?: string;
}

export interface PerLaboralIndefinidoNoFijoPorSentencia {
  id: number;
  numRegistroPersonal?: string;
  idArea?: AreaFuncional;
  idGrupo?: GrupoSalarial;
  idTitulacion?: Titulacion;
  tipoJornada?: TipoJornada;
  pagas?: string;
  fechaSentencia?: Date;
  tardes?: string;
  complementoSalarial?: string;
  responsable?: DatosPersonales;
  laboratorio?: Laboratorio;
  idDepto?: Departamento;
  idServicio?: Servicio;
  observaciones?: string;
}

export interface PerLaboralInterino {
  id: number;
  tardes?: string;
  complementoSalarial?: string;
  seguro?: string;
  fechaFinSeguroAcc?: Date;
  fechaFinSeguroRc?: Date;
  numRegistroPersonal?: string;
  categoria?: CategoriaTrabajador;
  idTitulacion?: Titulacion;
  tipoJornada?: TipoJornada;
  responsable?: DatosPersonales;
  laboratorio?: Laboratorio;
  idDepto?: Departamento;
  idServicio?: Servicio;
  observaciones?: string;
}


