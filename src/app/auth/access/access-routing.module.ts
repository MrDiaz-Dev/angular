import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccessComponent } from './access.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadComponent: () =>
          import('./access.component').then((m) => m.AccessComponent),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AccessRoutingModule {}
