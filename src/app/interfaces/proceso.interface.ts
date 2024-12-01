export interface ProcesosPaginados {
  data: Proceso[]
  totalItems: number;
}
export interface Proceso {
  id: number;
  descripcion: string;
  tipoProceso: string;
}

export interface ProcesoPost {
  descripcion: string;
  tipoProceso: string;
}

export interface ProcesoActividad {
  id: number;
  prioridad: number;
  actividad: Actividad
}

export interface Actividad {
  id: number;
  nombre: string;
  descripcion: string;
}
