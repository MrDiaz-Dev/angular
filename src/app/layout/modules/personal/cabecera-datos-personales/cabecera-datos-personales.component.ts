import { Component, model } from '@angular/core';
import { DatosPersonales } from 'src/app/layout/interfaces/datos-personales.interface';
import { PrimeNgModule } from 'src/app/layout/shared/prime-ng/prime-ng.module';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cabecera-datos-personales',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './cabecera-datos-personales.component.html',
  styleUrl: './cabecera-datos-personales.component.scss',
})
export class CabeceraDatosPersonalesComponent {
  // #region variables

  datosPersonales = model<DatosPersonales>();

  cargarFotografiaURL(): string {
    return this.datosPersonales()?.fotografia
      ? environment.STORAGE_URL + this.datosPersonales()?.fotografia
      : 'assets/images/notImage.png';
  }
}
