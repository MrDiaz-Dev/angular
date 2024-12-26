import {
  Component,
  computed,
  inject,
  model,
  OnInit,
  signal,
} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { PDropdown } from 'src/app/layout/interfaces/campo.interface';
import { DatosComunes } from 'src/app/layout/interfaces/datos-comunes.interface';
import { PrimeNgModule } from 'src/app/layout/shared/prime-ng/prime-ng.module';
import { DatosComunesService } from 'src/app/services/datos-comunes.service';
import { DatosTicService } from 'src/app/services/datos-tic.service';
import { DropdownService } from 'src/app/services/dropdown.service';
import { UtilService } from 'src/app/services/util.service';
import { FechaService } from 'src/app/services/utils/fecha.service';
import { CustomMessageService } from 'src/app/services/utils/message.service';

@Component({
  selector: 'app-datos-comunes',
  standalone: true,
  imports: [PrimeNgModule, ReactiveFormsModule, FormsModule],
  templateUrl: './datos-comunes.component.html',
  styleUrl: './datos-comunes.component.scss',
})
export class DatosComunesComponent implements OnInit {
  // region servicios y otras dependencias
  router = inject(Router);
  datosComunesService = inject(DatosComunesService);
  datosTicService = inject(DatosTicService);
  fechaService = inject(FechaService);
  dropdownService = inject(DropdownService);
  utilService = inject(UtilService);
  messageService = inject(CustomMessageService);
  fb = inject(FormBuilder);

  // #region variables

  datosComunes = model<DatosComunes>();
  
  submitLoading = model<boolean>();

  selectTrienios = computed<PDropdown[]>(() => {
    let trienios: PDropdown[] = [];
    for (let i = 0; i < 14; i++) {
      trienios.push({ label: i.toString(), value: i });
    }
    return trienios;
  });

  selectSN = signal<PDropdown[]>([
    { label: 'SI', value: 'SI' },
    { label: 'NO', value: 'NO' },
  ]);

  mailCNB = signal<string>('');

  form = this.fb.group({
    id: [null],
    fechaIngresoCnb: [null],
    // titulacion: [null],
    fechaIngresoAge: [null],
    trienios: [null],
    extension: [null],
    // numTarjCnb: [null],
    // codTarjCnb: [null],
    // tarjProvisional: [null],
    // tarjActiva: [null],
    // accesoDenegado: [null],
    // fechaDenegacion: [null],
    // ocultarDenegacion: [null],
    // observacionesSeg: [null],
    visibleWeb: [null],
    // urlWeb: [null],
    observaciones: [null],
    // idPersona: [null],
    // idTipo: [null],
    // cargoSeg: [null],
  });

  // #endregion variables

  ngOnInit(): void {
    this.cargarFormulario();
  }

  cargarFormulario() {
    this.form.reset(this.datosComunes());

    for (const key in this.datosComunes()) {
      if (Object.prototype.hasOwnProperty.call(this.datosComunes(), key)) {
        const element = this.datosComunes()[key];
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

    this.cargarEmailCNB();

    console.log('form cargado', this.form.value);
  }

  cargarEmailCNB() {
    this.datosTicService.getEmailCNB(this.datosComunes().id).then((mail) => {
      this.mailCNB.set(mail);
    });
  }

  save() {
    if (this.form.invalid) {
      this.messageService.info('Revise los campos');
      return;
    }

    console.log('form', this.form.value);

    let bodyToSend = this.utilService.controlAndFormatIRIs(this.form.value);
    bodyToSend = this.fechaService.formatDatesBeforeSend(bodyToSend);

    console.log('bodyToSend', bodyToSend);

    this.submitLoading.set(true);

    this.datosComunesService
      .edit(this.datosComunes().id, bodyToSend)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.messageService.success('Datos laborales guardados');
          this.datosComunes.set(response);
          this.ngOnInit();
          this.submitLoading.set(false);
        },
        error: (error) => {
          console.error(error);
          this.messageService.error(
            error.error.message ??
              'Error desconocido al actualizar los datos laborales',
          );
          this.submitLoading.set(false);
        },
      });
  }
}
