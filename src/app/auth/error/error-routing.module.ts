import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadComponent: () =>
          import('./error.component').then((m) => m.ErrorComponent),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
