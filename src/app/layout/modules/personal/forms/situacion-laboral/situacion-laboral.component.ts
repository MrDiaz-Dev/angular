import { Component, inject, input, model } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNgModule } from 'src/app/layout/shared/prime-ng/prime-ng.module';
import { DropdownService } from 'src/app/services/dropdown.service';
import { TrabajadoresService } from 'src/app/services/trabajadores.service';
import { UtilService } from 'src/app/services/util.service';
import { FechaService } from 'src/app/services/utils/fecha.service';
import { CustomMessageService } from 'src/app/services/utils/message.service';

@Component({
  selector: 'app-situacion-laboral',
  standalone: true,
  imports: [PrimeNgModule, ReactiveFormsModule, FormsModule],
  templateUrl: './situacion-laboral.component.html',
  styleUrl: './situacion-laboral.component.scss',
})
export class SituacionLaboralComponent {
  // region servicios y otras dependencias
  router = inject(Router);
  TrabajadoresService = inject(TrabajadoresService);
  fechaService = inject(FechaService);
  dropdownService = inject(DropdownService);
  utilService = inject(UtilService);
  messageService = inject(CustomMessageService);
  fb = inject(FormBuilder);

  // #region variables

  situacionLaboral = model<any>();

  submitLoading = model<boolean>();

  idPersona = input<string | number>();

  form = this.fb.group({});

  // #endregion variables

  ngOnInit(): void {
    this.cargarFormulario();
  }

  cargarFormulario() {
    this.form.reset(this.situacionLaboral());

    for (const key in this.situacionLaboral()) {
      if (Object.prototype.hasOwnProperty.call(this.situacionLaboral(), key)) {
        const element = this.situacionLaboral()[key];
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

    console.log('form cargado', this.form.value);
  }

  save() {}
}
