import { DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CustomMessageService } from 'src/app/services/utils/message.service';
import { ConfirmationService } from 'primeng/api';
import * as XLSX from 'xlsx';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';
import { ContextService } from 'src/app/services/utils/context.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AppMenuitemComponent } from './app.menuitem.component';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  standalone: true,
  imports: [AppMenuitemComponent],
  styles: [
    `
      .layout-menu {
        background-color: #7283b0;
        color: #ffffff;
      }
    `,
  ],
})
export class AppMenuComponent implements OnInit, OnDestroy {
  model: any[] = [];

  constructor(public layoutService: LayoutService) {}

  private readonly router = inject(Router);

  private readonly contextService = inject(ContextService);

  destroyRef = inject(DestroyRef);

  selectedPageMode: string = null;

  pageModeState: string = null;

  usuario: any = JSON.parse(localStorage.getItem('usuario') || '{}');

  url: string = null;

  API_URL: string = environment.API_URL;

  public subs: Subscription[] = [];

  endpoint: string = null;

  miInputFile = null;

  excel: string | ArrayBuffer = null;

  processing: boolean = false;

  rootUrl: string = window.location.origin + '/#';

  ngOnInit() {
    this.model = [
      {
        label: `Bienvenido ${this.usuario.nombre} ${this.usuario.apellido1} ${this.usuario.apellido2}`,
        items: [
          {
            label: 'Busqueda Reducida',
            icon: 'pi pi-search',
            routerLink: ['/bus-reducida'],
            tooltip: 'Busqueda Reducida',
          },
        ],
      },
    ];
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
}
