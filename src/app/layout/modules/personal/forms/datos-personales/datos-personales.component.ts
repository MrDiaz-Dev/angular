import {
  Component,
  effect,
  inject,
  input,
  model,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PDropdown } from 'src/app/layout/interfaces/campo.interface';
import { DatosComunes } from 'src/app/layout/interfaces/datos-comunes.interface';
import { DatosPersonales } from 'src/app/layout/interfaces/datos-personales.interface';
import { Personal } from 'src/app/layout/interfaces/personal.interface';
import { PrimeNgModule } from 'src/app/layout/shared/prime-ng/prime-ng.module';
import { DatosPersonalesService } from 'src/app/services/datos-personales.service';
import { FechaService } from 'src/app/services/utils/fecha.service';
import { environment } from 'src/environments/environment';
import { signal } from '@angular/core';
import { DropdownService } from 'src/app/services/dropdown.service';
import {
  IdNombre,
  Pais,
  Titulacion,
} from 'src/app/layout/interfaces/entidades.interface';
import { FileUpload } from 'primeng/fileupload';
import { take } from 'rxjs';
import { UtilService } from 'src/app/services/util.service';
import { CustomMessageService } from 'src/app/services/utils/message.service';

@Component({
  selector: 'app-datos-personales',
  standalone: true,
  imports: [PrimeNgModule, ReactiveFormsModule, FormsModule],
  templateUrl: './datos-personales.component.html',
  styleUrl: './datos-personales.component.scss',
})
export class DatosPersonalesComponent implements OnInit {
  // region servicios y otras dependencias
  router = inject(Router);
  datosPersonalesService = inject(DatosPersonalesService);
  fechaService = inject(FechaService);
  dropdownService = inject(DropdownService);
  utilService = inject(UtilService);
  messageService = inject(CustomMessageService);
  fb = inject(FormBuilder);

  // #region variables

  datosPersonales = model<DatosPersonales>();
  // datosComunes = input<DatosComunes>()

  selectSN = signal<string[]>(['SI', 'NO']);
  selectSexo = signal<PDropdown[]>([
    { label: 'Hombre', value: 'H' },
    { label: 'Mujer', value: 'M' },
  ]);
  selectDocumento = signal<string[]>(['NIE', 'NIF', 'Pasaporte']);
  selectPaises = signal<PDropdown[]>([]);
  selectTitulaciones = signal<PDropdown[]>([]);

  form = this.fb.group({
    id: [null],
    tipoIdent: [null],
    dniNie: [null],
    fechaFinNie: [null],
    nombre: [null],
    apellido1: [null],
    apellido2: [null],
    sexo: [null],
    fechaNacimiento: [null],
    lugarNacimiento: [null],
    direccion1: [null],
    cp1: [null],
    localidad1: [null],
    provincia1: [null],
    telefono1: [null],
    emailPersonal: [null],
    nss: [null],
    observaciones: [null],
    activo: [null],
    pendienteAct: [null],
    pendienteDesact: [null],
    personalCnb: [null],
    falta: [null],
    idPais: [null],
    titulaciones: [null],
    numeroTarjeta: [null],
    fotografia: [null],
  });

  titulacionToAdd = model<string | null>(null);
  titulaciones = signal<string[]>([]);

  @ViewChild(FileUpload)
  fileUpload!: FileUpload;

  imagenCargada = model<string>(null);

  // #endregion variables

  ngOnInit(): void {
    console.warn('Formulario de datos personales');

    console.log('datosPersonales recibidos', this.datosPersonales());
    this.cargarFormulario();
    this.cargarDropdowns();
  }

  cargarFormulario() {
    this.form.reset(this.datosPersonales());

    for (const key in this.datosPersonales()) {
      if (Object.prototype.hasOwnProperty.call(this.datosPersonales(), key)) {
        const element = this.datosPersonales()[key];
        // verificar que el valor sea un string y que tenga la estructura de una fecha
        if (
          typeof element === 'string' &&
          element.includes('T') &&
          element.includes('-') &&
          element.includes(':')
        ) {
          this.form
            .get(key)
            ?.patchValue(this.fechaService.fechaAbsoluta(element));
        }
      }
    }

    this.form
      .get('idPais')
      .patchValue((this.datosPersonales().idPais as Pais)?.idPais);

    this.titulaciones.set(this.datosPersonales().titulaciones ?? []);

    this.exclusionMutuaTitulaciones();

    console.log('form cargado', this.form.value);
  }

  async cargarDropdowns() {
    // this.selectPaises.set(await this.dropdownService.getPaises);
    this.dropdownService.setPaisesOnSignal(this.selectPaises);
    this.dropdownService.setTitulacionesOnSignal(this.selectTitulaciones);
  }

  save(file: FileUpload) {

    if (this.form.invalid) {
      this.messageService.info('Revise los campos');
      return;
    }

    console.log('form', this.form.value);

    let bodyToSend = this.utilService.controlAndFormatIRIs(this.form.value);

    bodyToSend = this.utilService.controlTypes(bodyToSend);

    bodyToSend = this.fechaService.formatDatesBeforeSend(bodyToSend);

    bodyToSend.titulaciones = this.titulaciones();

    bodyToSend.fotografia = this.imagenCargada() ?? bodyToSend.fotografia;

    console.log('bodyToSend', bodyToSend);

    this.datosPersonalesService
      .edit(this.datosPersonales().id, bodyToSend)
      .pipe(take(1))
      .subscribe({
        next: (personal) => {
          console.log('personal', personal);
          this.datosPersonales.set(personal);
          file.clear();
          this.messageService.success('Datos personales actualizados');
          this.ngOnInit();
        },
        error: (error) => {
          console.error(error);
          this.messageService.error(
            error.error.message ??
              'Error desconocido al actualizar los datos personales',
          );
        },
      });
  }

  addTitulacion() {
    if (this.titulacionToAdd) {
      this.titulaciones.update((titulaciones) => {
        console.log('titulaciones', titulaciones);
        titulaciones.push(this.titulacionToAdd());
        return titulaciones;
      });
      this.titulacionToAdd.set(null);
    }
  }

  // metodo para menejar la exclusion mutua entre el select de titulaciones y las titulaciones
  exclusionMutuaTitulaciones() {
    this.selectTitulaciones.update((titulacionesOriginales) => {
      return titulacionesOriginales.filter(
        (titulacion) => !this.titulaciones().includes(titulacion.label),
      );
    });
  }

  removeTitulacion(titulacionName: string) {
    this.titulaciones.update((titulaciones) => {
      return titulaciones.filter((titulacion) => titulacion !== titulacionName);
    });
  }

  clearFile() {
    if (this.fileUpload._files) {
      this.fileUpload.clear();
    }

    this.imagenCargada.set(null);
  }

  borrarImagen() {
    this.imagenCargada.set(null);
    // @ts-ignore
    this.form.get('fotografia')?.patchValue(null);
  }

  onSelect(event: any) {
    let fileReader = new FileReader();

    fileReader.readAsDataURL(event['currentFiles'][0]);

    fileReader.onload = () => {
      // @ts-ignore
      this.imagenCargada.set(fileReader.result);
    };
  }

  cargarFotografiaURL(): string {
    if (this.imagenCargada()) return this.imagenCargada();
    return this.form.get('fotografia')?.value
      ? environment.STORAGE_URL + this.form.get('fotografia')?.value
      : 'assets/images/notImage.png';
  }
}
