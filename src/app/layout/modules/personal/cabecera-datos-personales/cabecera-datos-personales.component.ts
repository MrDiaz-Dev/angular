import {
  Component,
  computed,
  inject,
  input,
  model,
  ViewEncapsulation,
} from '@angular/core';
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

  datosComunesIdTipoMessagePrevValue: Message[] = [];

  bajaMedicaActual = input<string>();

  bajaMedicaActualMessagePrevValue: Message[] = [];

  tituloSituacionLaboralActualPMessage = computed<Message[]>(() => {
    // si no hay datos lo dejamos como estaba
    if (!this.datosComunesIdTipo()) {
      return this.datosComunesIdTipoMessagePrevValue;
    }

    // si hay datos contruimos el mensaje
    let newDatosComunesIdTipoMessageValue = [
      {
        severity: 'info',
        summary: `${this.datosComunesIdTipo()['idCategoria']['nombre']}`,
        detail:
          this.datosComunesIdTipo()['nombre'] ==
          this.datosComunesIdTipo()['idCategoria']['nombre']
            ? ''
            : this.datosComunesIdTipo()['nombre'],
        icon: 'pi pi-briefcase',
      },
    ];

    // si el mensaje es igual al anterior no lo actualizamos y retornamos el anterior
    if (
      JSON.stringify(newDatosComunesIdTipoMessageValue) ===
      JSON.stringify(this.datosComunesIdTipoMessagePrevValue)
    ) {
      return this.datosComunesIdTipoMessagePrevValue;
    }

    // si es diferente actualizamos el previo y retornamos el nuevo mensaje
    this.datosComunesIdTipoMessagePrevValue = newDatosComunesIdTipoMessageValue;

    return newDatosComunesIdTipoMessageValue;
  });

  bajaMedicaActualPMessage = computed<Message[]>(() => {
    // si no hay datos lo dejamos como estaba
    if (!this.bajaMedicaActual()) {
      return this.bajaMedicaActualMessagePrevValue;
    }

    // si hay datos contruimos el mensaje
    let newBajaMedicaActualMessageValue = [
      {
        severity: 'error',
        summary: `Baja médica activa:`,
        detail: `Desde ${this.fechaService.formatFecha(this.bajaMedicaActual())}`,
        icon: 'pi pi-exclamation-circle',
      },
    ];

    // si el mensaje es igual al anterior no lo actualizamos y retornamos el anterior
    if (
      JSON.stringify(newBajaMedicaActualMessageValue) ===
      JSON.stringify(this.bajaMedicaActualMessagePrevValue)
    ) {
      return this.bajaMedicaActualMessagePrevValue;
    }

    // si es diferente actualizamos el previo y retornamos el nuevo mensaje
    this.bajaMedicaActualMessagePrevValue = newBajaMedicaActualMessageValue;

    return newBajaMedicaActualMessageValue;	
  });

  cargarFotografiaURL(): string {
    return this.datosPersonales()?.fotografia
      ? environment.STORAGE_URL + this.datosPersonales()?.fotografia
      : 'assets/images/notImage.png';
  }
}
