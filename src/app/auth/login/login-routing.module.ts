import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        loadComponent: () =>
          import('./login.component').then((m) => m.LoginComponent),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
