import { Component, computed, inject, input, model, ViewEncapsulation } from '@angular/core';
import { DatosPersonales } from 'src/app/layout/interfaces/datos-personales.interface';
import { PrimeNgModule } from 'src/app/layout/shared/prime-ng/prime-ng.module';
import { environment } from 'src/environments/environment';
import { Message } from 'primeng/api';
import { DatosComunes } from 'src/app/layout/interfaces/datos-comunes.interface';
import { DatosPersonalesService } from 'src/app/services/datos-personales.service';
import { FechaService } from 'src/app/services/utils/fecha.service';

@Component({
  selector: 'app-cabecera-datos-personales',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './cabecera-datos-personales.component.html',
  styleUrl: './cabecera-datos-personales.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CabeceraDatosPersonalesComponent {

  // region servicios y otras dependencias
  fechaService = inject(FechaService);

  // #region variables

  datosPersonales = model<DatosPersonales>();

  datosComunesIdTipo = input();

  bajaMedicaActual = input<string>();

  tituloSituacionLaboralActualPMessage = computed<Message[]>(() => {
    return [{
      severity: 'info',
      summary: `${this.datosComunesIdTipo()['idCategoria']['nombre']}`,
      detail: this.datosComunesIdTipo()['nombre'] == this.datosComunesIdTipo()['idCategoria']['nombre']
        ? ''
        : this.datosComunesIdTipo()['nombre'],
      icon: 'pi pi-briefcase',
    }];
  })

  bajaMedicaActualPMessage = computed<Message[]>(() => {
    if (!this.bajaMedicaActual()) return [];
    return [{
      severity: 'error',
      summary: `Baja médica activa:`,
      detail: `Desde ${this.fechaService.formatFecha(this.bajaMedicaActual())}`,
      icon: 'pi pi-exclamation-circle',
    }];
  })

  cargarFotografiaURL(): string {
    return this.datosPersonales()?.fotografia
      ? environment.STORAGE_URL + this.datosPersonales()?.fotografia
      : 'assets/images/notImage.png';
  }
}
