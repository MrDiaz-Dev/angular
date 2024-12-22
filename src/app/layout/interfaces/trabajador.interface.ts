import {
  CategoriasTrabajadoresSimpleDTO,
  TiposLaboralesSubvSimpleDTO,
  TitulacionesSimpleDTO,
  FuentesFinanciacionSimpleDTO,
  TiposJornadaSimpleDTO,
  CuentasCargoSimpleDTO,
  DatosPersonalesSimpleDTO,
  LaboratoriosSimpleDTO,
  DepartamentosSimpleDTO,
  ServiciosSimpleDTO,
  GruposSalarialesSimpleDTO,
  ConveniosSimpleDTO,
  AreasFuncionalesSimpleDTO,
  ProyectosSimpleDTO,
  UniversidadesSimpleDTO,
  CentrosPertenenciasSimpleDTO,
  TiposPracticasSimpleDTO,
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
  idGrupo?: string | GruposSalarialesSimpleDTO;
  idArea?: string | AreasFuncionalesSimpleDTO;
  fuenteFinanciacion?: string;
  tipoLabSubv?: string;
  cuenta3?: string;
  denominacion?: string;
  idTipo?: string | idNombre;
  idCategoria?: string | CategoriasTrabajadoresSimpleDTO;
  idProyecto?: string | ProyectosSimpleDTO;
  idConvenio?: string | ConveniosSimpleDTO;
  idDepto?: string | DepartamentosSimpleDTO;
  asegurador?: string;
  tipoPermiso?: string;
  idPersona?: string | DatosPersonalesSimpleDTO;
  idServicio?: string | ServiciosSimpleDTO;
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
  idTitulacion?: string | TitulacionesSimpleDTO;
  idUniversidad?: string | UniversidadesSimpleDTO;
  idCentroPertenencia?: string | CentrosPertenenciasSimpleDTO;
  idTipoPractica?: string | TiposPracticasSimpleDTO;
  fechaSentencia?: string;
  referenciaAyuda?: string;
  cofinanciacion?: string;
  seguroAcc?: string;
  seguroRc?: string;
  empresa?: string;
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

export interface PerLaboralConCargoProgramasSubvencionadosDTO {
  id: number;
  fechaConv?: Date;
  referenciaAyuda?: string;
  numRegistroPersonal?: string;
  categoria?: CategoriasTrabajadoresSimpleDTO;
  tipoLabSubv?: TiposLaboralesSubvSimpleDTO;
  idTitulacion?: TitulacionesSimpleDTO;
  fuenteFinanciacion?: FuentesFinanciacionSimpleDTO;
  cofinanciacion?: string;
  financiacion?: string;
  pagas?: string;
  tipoJornada?: TiposJornadaSimpleDTO;
  cuenta?: CuentasCargoSimpleDTO;
  tardes?: string;
  complementoSalarial?: string;
  responsable?: DatosPersonalesSimpleDTO;
  laboratorio?: LaboratoriosSimpleDTO;
  idDepto?: DepartamentosSimpleDTO;
  idServicio?: ServiciosSimpleDTO;
  observaciones?: string;
}

export interface PerLaboralConCargoProyectoDTO {
  id: number;
  solaut?: number;
  fechaConv?: Date;
  diasVacaciones?: string;
  fuenteFinanciacion?: FuentesFinanciacionSimpleDTO;
  financiacion?: string;
  porcentaje?: string;
  idArea?: AreasFuncionalesSimpleDTO;
  idGrupo?: GruposSalarialesSimpleDTO;
  idTitulacion?: TitulacionesSimpleDTO;
  tipoJornada?: TiposJornadaSimpleDTO;
  pagas?: number;
  idProyecto?: ProyectosSimpleDTO;
  idConvenio?: ConveniosSimpleDTO;
  tareas?: string;
  responsable?: DatosPersonalesSimpleDTO;
  laboratorio?: LaboratoriosSimpleDTO;
  idDepto?: DepartamentosSimpleDTO;
  idServicio?: ServiciosSimpleDTO;
  observaciones?: string;
}

export interface PerLaboralesFijosDTO {
  id: number;
  fechaJubilacion?: Date;
  fechaJubilacionEf?: Date;
  numRegistroPersonal?: string;
  rpt?: string;
  complementoSalarial?: string;
  idArea?: AreasFuncionalesSimpleDTO;
  idGrupo?: GruposSalarialesSimpleDTO;
  idTitulacion?: TitulacionesSimpleDTO;
  tipoJornada?: TiposJornadaSimpleDTO;
  responsable?: DatosPersonalesSimpleDTO;
  laboratorio?: LaboratoriosSimpleDTO;
  idDepto?: DepartamentosSimpleDTO;
  idServicio?: ServiciosSimpleDTO;
  observaciones?: string;
}

export interface PerLaboralIndefinidoNoFijoPorSentenciaDTO {
  id: number;
  numRegistroPersonal?: string;
  idArea?: AreasFuncionalesSimpleDTO;
  idGrupo?: GruposSalarialesSimpleDTO;
  idTitulacion?: TitulacionesSimpleDTO;
  tipoJornada?: TiposJornadaSimpleDTO;
  pagas?: string;
  fechaSentencia?: Date;
  tardes?: string;
  complementoSalarial?: string;
  responsable?: DatosPersonalesSimpleDTO;
  laboratorio?: LaboratoriosSimpleDTO;
  idDepto?: DepartamentosSimpleDTO;
  idServicio?: ServiciosSimpleDTO;
  observaciones?: string;
}

export interface PerLaboralInterinoDTO {
  id: number;
  tardes?: string;
  complementoSalarial?: string;
  seguro?: string;
  fechaFinSeguroAcc?: Date;
  fechaFinSeguroRc?: Date;
  numRegistroPersonal?: string;
  categoria?: CategoriasTrabajadoresSimpleDTO;
  idTitulacion?: TitulacionesSimpleDTO;
  tipoJornada?: TiposJornadaSimpleDTO;
  responsable?: DatosPersonalesSimpleDTO;
  laboratorio?: LaboratoriosSimpleDTO;
  idDepto?: DepartamentosSimpleDTO;
  idServicio?: ServiciosSimpleDTO;
  observaciones?: string;
}


