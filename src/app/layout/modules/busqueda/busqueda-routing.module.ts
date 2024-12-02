import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bus-reducida',
    loadComponent: () =>
      import('./bus-reducida/bus-reducida.component').then(
        (m) => m.BusReducidaComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedaRoutingModule {}
