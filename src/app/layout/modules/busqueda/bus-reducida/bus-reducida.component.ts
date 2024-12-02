import { Component } from '@angular/core';

@Component({
  selector: 'app-bus-reducida',
  standalone: true,
  imports: [],
  templateUrl: './bus-reducida.component.html',
  styleUrl: './bus-reducida.component.scss',
})
export class BusReducidaComponent {
  constructor() {}

  titulo = 'Busqueda reducida';

  ngOnInit() {
    console.log('Busqueda reducida');
  }

  ngOnDestroy() {
    console.log('Busqueda reducida destruido');
  }
}
