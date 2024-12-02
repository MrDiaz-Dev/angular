import { DestroyRef, inject, Injectable } from '@angular/core';
import { Pais } from 'src/app/shared/interfaces/p-dropdowns/pais.interface';
import { PaisesService } from 'src/app/shared/services/paises.service';
import { Paises2Service } from 'src/app/shared/services/paises2.service';
import { TipoTrabajador } from 'src/app/shared/interfaces/p-dropdowns/tipos-trabajadores.interface';
import { TipoTrabajadoresService } from 'src/app/shared/services/tipo-trabajadores.service';
import { TipoBeca } from '../interfaces/p-dropdowns/tipos-becas.interface';
import { TipoBecasService } from './tipo-becas.service';
import { Servicio } from '../interfaces/servicio.interface';
import { ServiciosService } from './servicios.service';
import { Departamento } from '../interfaces/departamento.interface';
import { DepartamentosService } from './departamentos.service';
import { CargoSeguridad } from '../interfaces/cargos-seguridad.interface';
import { CargosSeguridadService } from './cargos-seguridad.service';
import { CategoriaFuncionario } from '../interfaces/categoria-funcionario.interface';
import { CategoriasFuncionariosService } from './categorias-funcionarios.service';
import { DenominacionFunc } from '../interfaces/denominacion-func.interface';
import { DenominacionFuncService } from './denominacion-func.service';
import { AseguradoresService } from './aseguradores.service';
import { Asegurador } from '../interfaces/asegurador.interface';
import { TiposJornadaService } from './tipos-jornada.service';
import { TipoJornada } from '../interfaces/tipos-jornada.interface';
import { DatosPersonales } from '../interfaces/datos-personales.interface';
import { DatosPersonalesService } from './datos-personales.service';
import { Proyecto } from '../interfaces/proyecto.interface';
import { ProyectosService } from './proyectos.service';
import { FuenteFinanciacion } from '../interfaces/fuentes-financiacion.interface';
import { FuentesFinanciacionService } from './fuentes-financiacion.service';
import { AreaFuncional } from '../interfaces/areas-funcionales.interface';
import { AreasFuncionalesService } from './areas-funcionales.service';
import { GrupoSalarial } from '../interfaces/grupos-salariales.interface';
import { GruposSalarialesService } from './grupos-salariales.service';
import { CuentaCargo } from '../interfaces/cuentas-cargo.interface';
import { CuentasCargoService } from './cuentas-cargo.service';
import { Convenio } from '../interfaces/convenios.interface';
import { ConveniosService } from './convenios.service';
import { CategoriaLabCont } from '../interfaces/categorias-lab-cont.interface';
import { CategoriasLabContService } from './categorias-lab-cont.service';
import { TipoLaboralesSubv } from '../interfaces/tipos-laborales-subv.interface';
import { TiposLaboralesSubvService } from './tipos-laborales-subv.service';
import { Empresa } from '../interfaces/empresas.interface';
import { EmpresasService } from './empresas.service';
import { CentrosCsic } from '../interfaces/centros-csic.interface';
import { CentrosCsicService } from './centros-csic.service';
import { TiposPermisos } from '../interfaces/tipos-permisos.interface';
import { TiposPermisosService } from './tipos-permisos.service';
import { TiposPermisos2018 } from '../interfaces/tipos-permisos2018.interface';
import { TiposPermisos2018Service } from './tipos-permisos2018.service';
import { TiposBajasService } from './tipos-bajas.service';
import { TipoBaja } from '../interfaces/tipos_bajas.interface';
import { Laboratorio } from '../interfaces/laboratorio.interface';
import { LaboratoriosService } from './laboratorios.service';
import { TiposConvBeca } from '../interfaces/tipos-conv-becas.interface';
import { TiposConvBecasService } from './tipos-conv-becas.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CentrosPertenencias } from '../interfaces/centros-pertenencias';
import { CentrosPertenenciasService } from './centros-pertenencias.service';
import { TiposPracticas } from '../interfaces/tipos-practicas';
import { Universidad } from '../interfaces/universidades';
import { UniversidadesService } from './universidades.service';
import { TiposPracticasService } from './tipos-practicas.service';
import { TiposConvocatoriasService } from './tipos-convocatorias.service';
import { ConvocatoriasService } from './convocatorias.service';
import { Convocatoria } from '../interfaces/convocatorias.interface';
import { Cuenta } from '../interfaces/cuentas.interface';
import { Titulacion } from '../interfaces/titulaciones.interface';
import { TitulacionesService } from './titulaciones.service';
import { ComplementoSalarialService } from './complemento-salarial.service';
import { ComplementoSalarial } from '../interfaces/complemento-salarial.interface';

export interface PDropdown {
  name: string;
  value: string | number;
  correo?: string | null;
  id?: string | number;
  iri?: string | number;
  opcion1?: string | number;
  referencia?: string;
  description?: string;
}

@Injectable({
  providedIn: 'root',
})
export class PDropdownService {
  SN!: string[];
  _tiposSN: PDropdown[] = [];

  paises!: Pais[];
  _tiposPaises: PDropdown[] = [];

  paisesId!: Pais[];
  _tiposPaisesId: PDropdown[] = [];

  paises2!: Pais[];
  _tiposPaises2: PDropdown[] = [];

  paises2Id!: Pais[];
  _tiposPaises2Id: PDropdown[] = [];

  trabajadores: TipoTrabajador[] = [];
  _tiposTrabajadores: PDropdown[] = [];

  categoriasTrabajadores: TipoTrabajador[] = [];
  _categoriasTiposTrabajadores: PDropdown[] = [];

  becas: TipoBeca[] = [];
  _tiposBecas: PDropdown[] = [];

  cargosSeguridad: CargoSeguridad[] = [];
  _tiposCargosSeguridad: PDropdown[] = [];

  tiposPracticas: TiposPracticas[] = [];
  _tiposTiposPracticas: PDropdown[] = [];

  universidades: Universidad[] = [];
  _tiposUniversidades: PDropdown[] = [];

  centrosPertenencias: CentrosPertenencias[] = [];
  _tiposCentrosPertenencias: PDropdown[] = [];

  servicios: Servicio[] = [];
  _tiposServicios: PDropdown[] = [];

  departamentos: Departamento[] = [];
  _tiposDepartamentos: PDropdown[] = [];

  categoriasFuncionarios: CategoriaFuncionario[] = [];
  _tiposCategoriasFuncionarios: PDropdown[] = [];

  denominacionFunc: DenominacionFunc[] = [];
  _tiposDenominacionFunc: PDropdown[] = [];

  aseguradores: Asegurador[] = [];
  _tiposAseguradores: PDropdown[] = [];

  laboratorios: Laboratorio[] = [];
  _tiposLaboratorios: PDropdown[] = [];

  tiposJornada: TipoJornada[] = [];
  _tiposJornadas2: PDropdown[] = [];
  _tiposJornadas3: PDropdown[] = [];

  tipoResponsable: DatosPersonales[] = [];
  _tiposResponsables: PDropdown[] = [];

  proyectos: Proyecto[] = [];
  _tiposproyectos: PDropdown[] = [];
  _tiposproyectosNombre: PDropdown[] = [];

  fuentesFinanciacion: FuenteFinanciacion[] = [];
  _tiposFuentesFinanciacion: PDropdown[] = [];

  areasFuncionales: AreaFuncional[] = [];
  _tiposAreasFuncionales: PDropdown[] = [];

  gruposSalariales: GrupoSalarial[] = [];
  _tiposGruposSalariales: PDropdown[] = [];

  cuentasCargo: CuentaCargo[] = [];
  _tiposCuentasCargo: PDropdown[] = [];

  convenios: Convenio[] = [];
  _tiposConvenios: PDropdown[] = [];

  categoriasLabCont: CategoriaLabCont[] = [];
  _tiposCategoriasLabCont: PDropdown[] = [];

  tipoLaboralesSubv: TipoLaboralesSubv[] = [];
  _tiposLaboralesSubv: PDropdown[] = [];

  empresas: Empresa[] = [];
  _tiposEmpresas: PDropdown[] = [];

  centrosCsic: CentrosCsic[] = [];
  _tiposCentrosCsic: PDropdown[] = [];

  tipoPermisos: TiposPermisos[] = [];
  _tiposPermisos: PDropdown[] = [];

  tipoPermisos2018: TiposPermisos2018[] = [];
  _tiposPermisos2018: PDropdown[] = [];

  tipoBajas: TipoBaja[] = [];
  _tiposBajas: PDropdown[] = [];

  tipoConvBecas: TiposConvBeca[] = [];
  _tiposConvBecas: PDropdown[] = [];

  convocatorias: Convocatoria[] = [];
  _tiposConvocatorias: PDropdown[] = [];

  cuentas!: Cuenta[];
  _tiposCuentas: PDropdown[] = [];

  titulaciones!: Titulacion[];
  _tiposTitulaciones: PDropdown[] = [];

  complementosSalariales!: ComplementoSalarial[];
  _tiposComplementosSalariales: PDropdown[] = [];

  constructor(
    private paisesService: PaisesService,
    private paises2Service: Paises2Service,
    private tipoTrabajadoresService: TipoTrabajadoresService,
    private tipoBecasService: TipoBecasService,
    private cargosSeguridadService: CargosSeguridadService,
    private serviciosService: ServiciosService,
    private centrosPertenenciasService: CentrosPertenenciasService,
    private universidadesService: UniversidadesService,
    private tiposPracticasService: TiposPracticasService,
    private departamentosService: DepartamentosService,
    private categoriasFuncionariosService: CategoriasFuncionariosService,
    private denominacionFuncService: DenominacionFuncService,
    private aseguradoresService: AseguradoresService,
    private tiposJornadaService: TiposJornadaService,
    private datosPersonalesService: DatosPersonalesService,
    private proyectosService: ProyectosService,
    private fuentesFinanciacionService: FuentesFinanciacionService,
    private areasFuncionalesService: AreasFuncionalesService,
    private gruposSalarialesService: GruposSalarialesService,
    private cuentasCargoService: CuentasCargoService,
    private conveniosService: ConveniosService,
    private categoriasLabContService: CategoriasLabContService,
    private tiposLaboralesSubvService: TiposLaboralesSubvService,
    private empresasService: EmpresasService,
    private centrosCsicService: CentrosCsicService,
    private tiposPermisosService: TiposPermisosService,
    private tiposPermisos2018Service: TiposPermisos2018Service,
    private tiposBajasService: TiposBajasService,
    private tiposConvBecasService: TiposConvBecasService,
    private laboratorioService: LaboratoriosService,
    private convocatoriasService: ConvocatoriasService,
    private titulacionesService: TitulacionesService,
    private complementoSalarialService: ComplementoSalarialService,
  ) {}

  destroyRef = inject(DestroyRef);

  public tipoSNData(): void {
    this._tiposSN.push({
      name: 'SI',
      value: 'SI',
      id: 'SI',
      iri: 'SI',
    });
    this._tiposSN.push({
      name: 'NO',
      value: 'NO',
      id: 'NO',
      iri: 'NO',
    });
  }

  get tiposSNData(): PDropdown[] {
    return this._tiposSN;
  }

  public convocatoriasData(): void {
    console.log('me llamaron');
    this.convocatoriasService.getDropdown().subscribe((respuesta) => {
      this.convocatorias = respuesta['hydra:member'];
      this.convocatorias.forEach((item) => {
        this._tiposConvocatorias.push({
          name: item.referencia,
          id: item.id,
          iri: item['@id'],
          value: item.id,
        });
      });
    });
  }

  public tipoCuentasData(): void {
    this.proyectosService.getCuentas().subscribe((respuesta) => {
      this.cuentas = respuesta['hydra:member'];
      this.cuentas.forEach((item) => {
        this._tiposCuentas.push({
          name: item.codigo,
          value: item.id,
          id: item.id,
          iri: item['@id'],
        });
      });
    });
  }

  get tiposCuentasData(): PDropdown[] {
    return this._tiposCuentas;
  }

  get tiposConvocatoriasData(): PDropdown[] {
    return this._tiposConvocatorias;
  }

  public paisesData(): void {
    let newSub = this.paisesService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.paises = respuesta['hydra:member'];
        this.paises.forEach((item) => {
          this._tiposPaises.push({
            name: item.nombre,
            value: item.idPais,
            id: item.idPais,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  public paisesDataId(): void {
    let newSub = this.paisesService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.paisesId = respuesta['hydra:member'];
        this.paisesId.forEach((item) => {
          this._tiposPaisesId.push({
            name: item.nombre,
            value: item.idPais,
            id: item.idPais,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposPaisesData(): PDropdown[] {
    return this._tiposPaises;
  }

  get tiposPaisesDataId(): PDropdown[] {
    return this._tiposPaisesId;
  }

  public paises2Data(): void {
    let newSub = this.paises2Service
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.paises2 = respuesta['hydra:member'];
        this.paises2.forEach((item) => {
          this._tiposPaises2.push({
            name: item.nombre,
            value: item.idPais,
            id: item.idPais,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  public paises2DataId(): void {
    let newSub = this.paises2Service
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.paises2Id = respuesta['hydra:member'];
        this.paises2Id.forEach((item) => {
          this._tiposPaises2Id.push({
            name: item.nombre,
            value: item.idPais,
            id: item.idPais,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposPaises2Data(): PDropdown[] {
    return this._tiposPaises2;
  }

  get tiposPaises2DataId(): PDropdown[] {
    return this._tiposPaises2Id;
  }

  public tipoComplementoSalarialData(): void {
    let newSub = this.complementoSalarialService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.complementosSalariales = respuesta['hydra:member'];
        this.complementosSalariales.forEach((item) => {
          this._tiposComplementosSalariales.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposComplementosSalarialesData(): PDropdown[] {
    return this._tiposComplementosSalariales;
  }

  public tipoTitulacionData(): void {
    let newSub = this.titulacionesService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.titulaciones = respuesta['hydra:member'];
        this.titulaciones.forEach((item) => {
          this._tiposTitulaciones.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposTitulacionesData(): PDropdown[] {
    return this._tiposTitulaciones;
  }

  public tipoTrabajadorData(): void {
    let newSub = this.tipoTrabajadoresService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.trabajadores = respuesta['hydra:member'];
        this.trabajadores.forEach((item) => {
          this._tiposTrabajadores.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposTrabajadoresData(): PDropdown[] {
    return this._tiposTrabajadores;
  }

  public categoriasTipoTrabajadorData(): void {
    let newSub = this.tipoTrabajadoresService
      .getCategoriasTiposTrabajadores()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.categoriasTrabajadores = respuesta['hydra:member'];
        this.categoriasTrabajadores.forEach((item) => {
          this._categoriasTiposTrabajadores.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get categoriasTiposTrabajadoresData(): PDropdown[] {
    return this._categoriasTiposTrabajadores;
  }

  public tipoBecaData(): void {
    let newSub = this.tipoBecasService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.becas = respuesta['hydra:member'];
        this.becas.forEach((item) => {
          this._tiposBecas.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposBecasData(): PDropdown[] {
    return this._tiposBecas;
  }

  public tipoCargoSeguridadData(): void {
    let newSub = this.cargosSeguridadService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.cargosSeguridad = respuesta['hydra:member'];
        this.cargosSeguridad.forEach((item) => {
          this._tiposCargosSeguridad.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposCargosSeguridadData(): PDropdown[] {
    return this._tiposCargosSeguridad;
  }

  public tipoServicioData(): void {
    let newSub = this.serviciosService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.servicios = respuesta['hydra:member'];
        this.servicios.forEach((item) => {
          this._tiposServicios.push({
            name: item.nombre,
            value: item.idServ,
            id: item.idServ,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposServiciosData(): PDropdown[] {
    return this._tiposServicios;
  }

  public tipoTiposPracticasData(): void {
    let newSub = this.tiposPracticasService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.tiposPracticas = respuesta['hydra:member'];
        this.tiposPracticas.forEach((item) => {
          this._tiposTiposPracticas.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposTiposPracticasData(): PDropdown[] {
    return this._tiposTiposPracticas;
  }

  public tipoUniversidadesData(): void {
    let newSub = this.universidadesService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.universidades = respuesta['hydra:member'];
        this.universidades.forEach((item) => {
          this._tiposUniversidades.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposUniversidadesData(): PDropdown[] {
    return this._tiposUniversidades;
  }

  public tipoCentrosPertenenciasData(): void {
    let newSub = this.centrosPertenenciasService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.centrosPertenencias = respuesta['hydra:member'];
        this.centrosPertenencias.forEach((item) => {
          this._tiposCentrosPertenencias.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposCentrosPertenenciasData(): PDropdown[] {
    return this._tiposCentrosPertenencias;
  }

  public tipoDepartamentoData(): void {
    let newSub = this.departamentosService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.departamentos = respuesta['hydra:member'];
        this.departamentos.forEach((item) => {
          this._tiposDepartamentos.push({
            name: item.nombre,
            value: item.idDepto,
            id: item.idDepto,
            iri: item['@id'],
            opcion1: item.codigo!,
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposDepartamentosData(): PDropdown[] {
    return this._tiposDepartamentos;
  }

  public categoriaFuncionarioData(): void {
    let newSub = this.categoriasFuncionariosService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.categoriasFuncionarios = respuesta['hydra:member'];
        this.categoriasFuncionarios.forEach((item) => {
          this._tiposCategoriasFuncionarios.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposCategoriasFuncionariosData(): PDropdown[] {
    return this._tiposCategoriasFuncionarios;
  }

  public denominacionFuncData(): void {
    let newSub = this.denominacionFuncService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.denominacionFunc = respuesta['hydra:member'];
        this.denominacionFunc.forEach((item) => {
          this._tiposDenominacionFunc.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposDenominacionFuncData(): PDropdown[] {
    return this._tiposDenominacionFunc;
  }

  public aseguradorData(): void {
    let newSub = this.aseguradoresService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.aseguradores = respuesta['hydra:member'];
        this.aseguradores.forEach((item) => {
          this._tiposAseguradores.push({
            name: item.asegurador,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposAseguradoresData(): PDropdown[] {
    return this._tiposAseguradores;
  }

  public laboratoriosData(): void {
    let newSub = this.laboratorioService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.laboratorios = respuesta['hydra:member'];
        this.laboratorios.forEach((item) => {
          this._tiposLaboratorios.push({
            name: item.nombre,
            value: item.idLab,
            id: item.idLab,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposLaboratoriosData(): PDropdown[] {
    return this._tiposLaboratorios;
  }

  public tipoJornadaData(tipoJor: '2' | '3' = '3'): void {
    if ((tipoJor = '2')) {
      let newSub = this.tiposJornadaService
        .getAll(tipoJor)
        .subscribe((respuesta) => {
          this.tiposJornada = respuesta['hydra:member'];
          this.tiposJornada.forEach((item) => {
            this._tiposJornadas2.push({
              name: item.nombre,
              value: item.id,
              opcion1: item.categoria['@id'], //ADVERTENCIA POBOSIBLE ERROR GABO
              id: item.id,
              iri: item['@id'],
            });
          });
          newSub.unsubscribe();
        });
    }
    if ((tipoJor = '3')) {
      let newSub = this.tiposJornadaService
        .getAll(tipoJor)
        .subscribe((respuesta) => {
          this.tiposJornada = respuesta['hydra:member'];
          this.tiposJornada.forEach((item) => {
            this._tiposJornadas3.push({
              name: item.nombre,
              value: item.id,
              opcion1: item.categoria['@id'], //ADVERTENCIA POBOSIBLE ERROR GABO
              id: item.id,
              iri: item['@id'],
            });
          });
          newSub.unsubscribe();
        });
    }
  }

  get tiposJornadasData2(): PDropdown[] {
    return this._tiposJornadas2;
  }
  get tiposJornadasData3(): PDropdown[] {
    return this._tiposJornadas3;
  }

  public tipoResponsableData(): void {
    let newSub = this.datosPersonalesService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.tipoResponsable = respuesta['hydra:member'];
        this.tipoResponsable.forEach((item) => {
          this._tiposResponsables.push({
            name: item.apellido1 + ' ' + item.apellido2 + ', ' + item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposResponsablesData(): PDropdown[] {
    return this._tiposResponsables;
  }

  public tipoProyectoData() {
    let newSub = this.proyectosService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.proyectos = respuesta['hydra:member'];
        this.proyectos.forEach((item) => {
          if (item.referencia != '') {
            this._tiposproyectos.push({
              name: item.referencia + ' (' + item.cuenta + ')',
              referencia: item.referencia,
              value: item.id,
              id: item.id,
              iri: item['@id'],
            });
          }
        });
        newSub.unsubscribe();
      });
  }

  get tiposProyectosData(): PDropdown[] {
    return this._tiposproyectos;
  }

  public tipoProyectoNombreData() {
    let newSub = this.proyectosService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.proyectos = respuesta['hydra:member'];
        this.proyectos.forEach((item) => {
          if (item.nombre != '') {
            this._tiposproyectosNombre.push({
              name: item.nombre,
              value: item.id,
              id: item.id,
              iri: item['@id'],
            });
          }
        });
        newSub.unsubscribe();
      });
  }

  get tiposProyectosNombreData(): PDropdown[] {
    return this._tiposproyectosNombre;
  }

  public fuenteFinanciacionData(): void {
    let newSub = this.fuentesFinanciacionService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.fuentesFinanciacion = respuesta['hydra:member'];
        this.fuentesFinanciacion.forEach((item) => {
          this._tiposFuentesFinanciacion.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposFuentesFinanciacionData(): PDropdown[] {
    return this._tiposFuentesFinanciacion;
  }

  public areasFuncionalesData(): void {
    let newSub = this.areasFuncionalesService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.areasFuncionales = respuesta['hydra:member'];
        this.areasFuncionales.forEach((item) => {
          this._tiposAreasFuncionales.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposAreasFuncionalesData(): PDropdown[] {
    return this._tiposAreasFuncionales;
  }

  public gruposSalarialesData() {
    
    let newSub = this.gruposSalarialesService.getAll().subscribe({
      next: (respuesta) => {
        this.gruposSalariales = respuesta['hydra:member'];
        this.gruposSalariales.forEach((item) => {
          this._tiposGruposSalariales.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
            //@ts-ignore
            areaID: item.idArea.id
          });
        });
        newSub.unsubscribe();
      },
    });
  }

  get tiposGruposSalarialesData(): PDropdown[] {
    return this._tiposGruposSalariales;
  }
  set tiposGruposSalarialesData(data: PDropdown[]) {
    this._tiposGruposSalariales = data;
  }

  public cuentasCargoData(): void {
    let newSub = this.cuentasCargoService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.cuentasCargo = respuesta['hydra:member'];
        this.cuentasCargo.forEach((item) => {
          this._tiposCuentasCargo.push({
            name: item.referencia,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposCuentasCargoData(): PDropdown[] {
    return this._tiposCuentasCargo;
  }

  public conveniosData(): void {
    let newSub = this.conveniosService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.convenios = respuesta['hydra:member'];
        this.convenios.forEach((item) => {
          this._tiposConvenios.push({
            name: item.referencia,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposConveniosData(): PDropdown[] {
    return this._tiposConvenios;
  }

  public categoriasLabContData(): void {
    let newSub = this.categoriasLabContService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.categoriasLabCont = respuesta['hydra:member'];
        this.categoriasLabCont.forEach((item) => {
          this._tiposCategoriasLabCont.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposCategoriasLabContData(): PDropdown[] {
    return this._tiposCategoriasLabCont;
  }

  public tiposLaboralSubvData(): void {
    let newSub = this.tiposLaboralesSubvService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.tipoLaboralesSubv = respuesta['hydra:member'];
        this.tipoLaboralesSubv.forEach((item) => {
          this._tiposLaboralesSubv.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposLaboralesSubvData(): PDropdown[] {
    return this._tiposLaboralesSubv;
  }

  public empresasData(): void {
    let newSub = this.empresasService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.empresas = respuesta['hydra:member'];
        this.empresas.forEach((item) => {
          this._tiposEmpresas.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposEmpresasData(): PDropdown[] {
    return this._tiposEmpresas;
  }

  public centrosCsicData(): void {
    let newSub = this.centrosCsicService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.centrosCsic = respuesta['hydra:member'];
        this.centrosCsic.forEach((item) => {
          this._tiposCentrosCsic.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposCentrosCsicData(): PDropdown[] {
    return this._tiposCentrosCsic;
  }

  public tipoPermisosData(): void {
    let newSub = this.tiposPermisosService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.tipoPermisos = respuesta['hydra:member'];
        this.tipoPermisos.forEach((item) => {
          this._tiposPermisos.push({
            name: item.tipo.toString() + ' - ' + item.descripcion.toString(),
            description: item.descripcion.toString(),
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposPermisosData(): PDropdown[] {
    return this._tiposPermisos;
  }

  // tipoPermisos2018: TiposPermisos2018[] = [];
  // _tiposPermisos2018: PDropdown[] = [];
  // private tiposPermisos2018Service: TiposPermisos2018Service
  public tipoPermisos2018Data(): void {
    let newSub = this.tiposPermisos2018Service
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.tipoPermisos2018 = respuesta['hydra:member'];
        this.tipoPermisos2018.forEach((item) => {
          this._tiposPermisos2018.push({
            name: item.tipo.toString() + ' - ' + item.descripcion.toString(),
            description: item.descripcion.toString(),
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposPermisos2018Data(): PDropdown[] {
    return this._tiposPermisos2018;
  }

  public tipoBajasData(): void {
    let newSub = this.tiposBajasService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.tipoBajas = respuesta['hydra:member'];
        this.tipoBajas.forEach((item) => {
          this._tiposBajas.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposBajasData(): PDropdown[] {
    return this._tiposBajas;
  }

  public tipoConvBecasData(): void {
    let newSub = this.tiposConvBecasService
      .getAll()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((respuesta) => {
        this.tipoConvBecas = respuesta['hydra:member'];
        this.tipoConvBecas.forEach((item) => {
          this._tiposConvBecas.push({
            name: item.nombre,
            value: item.id,
            id: item.id,
            iri: item['@id'],
          });
        });
        newSub.unsubscribe();
      });
  }

  get tiposConvBecasData(): PDropdown[] {
    return this._tiposConvBecas;
  }
}
