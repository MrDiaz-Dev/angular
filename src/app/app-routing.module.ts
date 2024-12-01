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
          ],
        },
        {
          path: 'auth',
          loadChildren: () =>
            import('./auth/auth.module').then((m) => m.AuthModule),
        },
        // { path: 'notfound', component: NotfoundComponent },
        { path: '**', component: NotfoundComponent },
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
