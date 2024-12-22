import { Component, model } from '@angular/core';

@Component({
  selector: 'app-situacion-laboral',
  standalone: true,
  imports: [],
  templateUrl: './situacion-laboral.component.html',
  styleUrl: './situacion-laboral.component.scss'
})
export class SituacionLaboralComponent {

  situacionLaboral = model<any>()
}
