import { HttpParams } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
} from '@angular/forms';
import { Title } from '@angular/platform-browser';
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
export class BusReducidaComponent implements OnInit {
  constructor() {}

  // region servicios y otras dependencias
  fb = inject(UntypedFormBuilder);
  router = inject(Router);
  messageService = inject(CustomMessageService);
  title = inject(Title);

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
    this.title.setTitle('RRHH - Busqueda reducida');
    this.recuperarBusquedaPrevia();
  }

  recuperarBusquedaPrevia() {
    const busquedaGuardada = sessionStorage.getItem('busquedaReducida');
    sessionStorage.removeItem('busquedaReducida');
    if (busquedaGuardada) {
      console.log('busquedaReducida', busquedaGuardada);
      // busquedaGuardada es un string de url params, lo convertimos a un objeto
      let busquedaGuardadaOBJ = {};
      busquedaGuardada.split('&').forEach((param) => {
        const [key, value] = param.split('=');
        busquedaGuardadaOBJ[key] = value;
      });

      console.log(`busquedaGuardada.split('&')`, busquedaGuardada.split('&'));
      console.log(`busquedaGuardadaOBJ`, busquedaGuardadaOBJ);

      this.camposDeBusqueda.patchValue(busquedaGuardadaOBJ);
    }
  }

  limpiar() {
    this.camposDeBusqueda.reset();
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
    sessionStorage.setItem('busquedaReducida', this.genURLParams());
    this.router.navigateByUrl(
      `/busqueda/bus-reducida-listado?${this.genURLParams()}`,
    );
  }

  ngOnDestroy() {
    console.warn('Busqueda reducida destruido');
  }
}
