import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./personal.component').then((c) => c.PersonalComponent),
    children: [
      {
        path: 'datos-personales/:idPersona',
        loadComponent: () =>
          import('./forms/datos-personales/datos-personales.component').then(
            (c) => c.DatosPersonalesComponent,
          ),
      },
      {
        path: 'datos-laborales/:idPersona',
        loadComponent: () =>
          import('./forms/datos-comunes/datos-comunes.component').then(
            (c) => c.DatosComunesComponent,
          ),
      },
      {
        path: 'situacion-laboral/:idPersona',
        loadComponent: () =>
          import('./forms/situacion-laboral/situacion-laboral.component').then(
            (c) => c.SituacionLaboralComponent,
          ),
      },
      {
        path: 'plantillas/:idPersona',
        loadComponent: () =>
          import('./plantillas/plantillas.component').then(
            (c) => c.PlantillasComponent,
          ),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalRoutingModule {}
