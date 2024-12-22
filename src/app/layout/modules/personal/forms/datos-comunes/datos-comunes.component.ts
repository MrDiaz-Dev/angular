import { Component, model } from '@angular/core';
import { DatosComunes } from 'src/app/layout/interfaces/datos-comunes.interface';

@Component({
  selector: 'app-datos-comunes',
  standalone: true,
  imports: [],
  templateUrl: './datos-comunes.component.html',
  styleUrl: './datos-comunes.component.scss',
})
export class DatosComunesComponent {
  datosComunes = model<DatosComunes>();
}
