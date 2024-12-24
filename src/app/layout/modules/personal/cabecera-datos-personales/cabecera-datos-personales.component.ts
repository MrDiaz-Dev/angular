import { Component, computed, input, model, ViewEncapsulation } from '@angular/core';
import { DatosPersonales } from 'src/app/layout/interfaces/datos-personales.interface';
import { PrimeNgModule } from 'src/app/layout/shared/prime-ng/prime-ng.module';
import { environment } from 'src/environments/environment';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-cabecera-datos-personales',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './cabecera-datos-personales.component.html',
  styleUrl: './cabecera-datos-personales.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CabeceraDatosPersonalesComponent {
  // #region variables

  datosPersonales = model<DatosPersonales>();

  tituloSituacionLaboralActual = input<string>();

  tituloSituacionLaboralActualPMessage = computed<Message[]>(() => {
    return [{
      severity: 'info',
      summary: 'Tipo de empleado:',
      detail: this.tituloSituacionLaboralActual(),
      icon: 'pi pi-briefcase',
    }];
  })

  cargarFotografiaURL(): string {
    return this.datosPersonales()?.fotografia
      ? environment.STORAGE_URL + this.datosPersonales()?.fotografia
      : 'assets/images/notImage.png';
  }
}
