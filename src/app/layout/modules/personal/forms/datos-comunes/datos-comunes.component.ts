import { Component, inject, model } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatosComunes } from 'src/app/layout/interfaces/datos-comunes.interface';
import { DatosComunesService } from 'src/app/services/datos-comunes.service';
import { DropdownService } from 'src/app/services/dropdown.service';
import { UtilService } from 'src/app/services/util.service';
import { FechaService } from 'src/app/services/utils/fecha.service';
import { CustomMessageService } from 'src/app/services/utils/message.service';

@Component({
  selector: 'app-datos-comunes',
  standalone: true,
  imports: [],
  templateUrl: './datos-comunes.component.html',
  styleUrl: './datos-comunes.component.scss',
})
export class DatosComunesComponent {
  // region servicios y otras dependencias
  router = inject(Router);
  datosComunesService = inject(DatosComunesService);
  fechaService = inject(FechaService);
  dropdownService = inject(DropdownService);
  utilService = inject(UtilService);
  messageService = inject(CustomMessageService);
  fb = inject(FormBuilder);

  // #region variables

  datosComunes = model<DatosComunes>();
  
  // #endregion variables
}
