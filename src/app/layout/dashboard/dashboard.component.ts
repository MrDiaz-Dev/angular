import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subscription, filter } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { UsuarioService } from 'src/app/services/auth/usuario.service';
import { ContextService } from 'src/app/services/utils/context.service';
import { NgStyle } from '@angular/common';

@Component({
    templateUrl: './dashboard.component.html',
    standalone: true,
    imports: [
    RouterLink,
    NgStyle
],
})
export class DashboardComponent implements OnInit, OnDestroy {
  subscription!: Subscription;

  otrasSubscripciones: Subscription[] = [];

  usuarioID = JSON.parse(localStorage.getItem('usuario')).id;

  private readonly usuarioService = inject(UsuarioService);
  private readonly router = inject(Router);
  private readonly contextService = inject(ContextService);

  public sections: any[];

  url: string = null;

  rootUrl: string = window.location.origin + '/#';

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        //  console.log('The URL changed to: ' + event['url'])
        this.url = event['url'];
      });

    this.contextService.setPageMode(null);

    this.sections = [
      {
        // title: 'Principal Menu',
        items: [],
      },
    ];
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.otrasSubscripciones.forEach((subscripcion) => {
      subscripcion.unsubscribe();
    });
  }
}
