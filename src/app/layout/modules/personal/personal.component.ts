import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import { PrimeNgModule } from '../../shared/prime-ng/prime-ng.module';
import { filter } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PrimeNgModule],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.scss',
})
export class PersonalComponent {
  // region servicios y otras dependencias
  router = inject(Router);

  // region variables

  /**
   * @variable urlState
   * @description Señal que se actualiza con los eventos de navegación del router.
   * Utiliza un filtro para capturar solo los eventos de tipo NavigationEnd.
   */
  urlState = toSignal(
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)),
  );

  /**
   * Computed signal property que obtiene el identificador de la persona (idPersona) desde la URL o el sessionStorage.
   * 
   * - Si la URL contiene un segmento en la posición 3, se guarda en el sessionStorage y se retorna.
   * - Si no, se intenta obtener el idPersona desde el sessionStorage.
   * 
   * @returns {number | string} El identificador de la persona.
   */
  idPersona = computed<number | string>(() => {
    if (!!this.urlState() && this.urlState()['url'].split('/')[3]) {
      sessionStorage.setItem('idPersona', this.urlState()['url'].split('/')[3]);
      return this.urlState()['url'].split('/')[3];
    } else if (this.router.url.split('/')[3]) {
      sessionStorage.setItem('idPersona', this.router.url.split('/')[3]);
      return this.router.url.split('/')[3];
    } else {
      return sessionStorage.getItem('idPersona');
    }
  });

  
  /**
   * Computa el número de página basado en el estado de la URL.
   * 
   * @returns {number} El número de página determinado por la URL actual.
   * 
   * - Si la URL contiene 'datos-personales', retorna 1.
   * - Si la URL contiene 'datos-laborales', retorna 2.
   * - Si la URL contiene 'situacion-laboral', retorna 3.
   * - En cualquier otro caso, retorna 4.
   * 
   * La función primero verifica si `urlState` está disponible y utiliza su valor.
   * Si no, utiliza la URL del router.
   */
  page = computed<number>(() => {
    if (!!this.urlState()) {
      if (this.urlState()['url'].includes('datos-personales')) {
        return 1;
      } else if (this.urlState()['url'].includes('datos-laborales')) {
        return 2;
      } else if (this.urlState()['url'].includes('situacion-laboral')) {
        return 3;
      } else {
        return 4;
      }
    }
    if (this.router.url.includes('datos-personales')) {
      return 1;
    } else if (this.router.url.includes('datos-laborales')) {
      return 2;
    } else if (this.router.url.includes('situacion-laboral')) {
      return 3;
    } else {
      return 4;
    }
  });

  
  /**
   * Computed property que devuelve un título basado en la página actual.
   * 
   * @returns {string} El título correspondiente a la página actual:
   * - 'Datos Personales' si la página es 1
   * - 'Datos Laborales' si la página es 2
   * - 'Situation Laboral' si la página es 3
   * - 'Plantillas' para cualquier otra página
   */
  titulo = computed<string>(() => {
    if (this.page() === 1) {
      return 'Datos Personales';
    } else if (this.page() === 2) {
      return 'Datos Laborales';
    } else if (this.page() === 3) {
      return 'Situation Laboral';
    } else {
      return 'Plantillas';
    }
  });

  ngOnInit() {
    console.warn('Modulo de Personal');
    console.log('idPersona', this.idPersona());
  }

  back() {
    let previousPersonalPage = sessionStorage.getItem('previousPersonalPage');

    if (previousPersonalPage) {
      this.router.navigateByUrl(previousPersonalPage);
    } else {
      this.router.navigate(['/']);
    }
  }
}
