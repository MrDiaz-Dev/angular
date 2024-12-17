import { HttpParams } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNgModule } from 'src/app/layout/shared/prime-ng/prime-ng.module';
import { CustomMessageService } from 'src/app/services/utils/message.service';

@Component({
  selector: 'app-bus-reducida',
  standalone: true,
  imports: [PrimeNgModule, ReactiveFormsModule, FormsModule],
  templateUrl: './bus-reducida.component.html',
  styleUrl: './bus-reducida.component.scss',
})
export class BusReducidaComponent {
  constructor() {}

  // region servicios y otras dependencias
  private fb = inject(UntypedFormBuilder);
  private router = inject(Router);
  private messageService = inject(CustomMessageService);

  // region variables
  titulo = 'Busqueda reducida';

  camposDeBusqueda = this.fb.group({
    nombre: [null],
    apellido1: [null],
    apellido2: [null],
  });

  // region metodos

  ngOnInit() {
    console.warn('Busqueda reducida');
  }

  /**
   * Genera una cadena de parámetros de URL a partir de los valores de `camposDeBusqueda`.
   *
   * Recorre los campos de `camposDeBusqueda` y agrega aquellos que tienen un valor definido a `HttpParams`.
   *
   * @returns {string} La cadena de parámetros de URL generada.
   */
  genURLParams(): string {
    let urlParams = new HttpParams();

    for (const campo in this.camposDeBusqueda.value) {
      if (this.camposDeBusqueda.value[campo]) {
        urlParams = urlParams.set(campo, this.camposDeBusqueda.value[campo]);
      }
    }

    return urlParams.toString();
  }

  buscar() {
    this.router.navigateByUrl(
      `/busqueda/bus-reducida-listado?${this.genURLParams()}`
    );
  }

  ngOnDestroy() {
    console.warn('Busqueda reducida destruido');
  }
}
