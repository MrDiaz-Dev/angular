import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';
import { AuthGuard } from './guards/auth.guard';
import { NotfoundComponent } from './layout/notfound/notfound.component';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: '',
          component: AppLayoutComponent,
          canActivate: [AuthGuard],
          children: [
            {
              path: '',
              loadChildren: () =>
                import('./layout/dashboard/dashboard.module').then(
                  (m) => m.DashboardModule
                ),
            },
            {
              path: 'busqueda',
              loadChildren: () =>
                import('./layout/modules/busqueda/busqueda.module').then(
                  (m) => m.BusquedaModule
                ),
            },
            {
              path: 'personal',
              loadChildren: () =>
                import('./layout/modules/personal/personal.module').then(
                  (m) => m.PersonalModule
                ),
            }
          ],
        },
        {
          path: 'auth',
          loadChildren: () =>
            import('./auth/auth.module').then((m) => m.AuthModule),
        },
        // { path: 'notfound', component: NotfoundComponent },
        {
          path: '**',
          loadComponent: () =>
            import('./layout/notfound/notfound.component').then(
              (m) => m.NotfoundComponent
            ),
        },
      ],
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
