import { Component, OnInit, inject } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from './layout/service/app.layout.service';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: true,
    imports: [
        RouterOutlet,
        ConfirmDialogModule,
        ToastModule,
    ],
})
export class AppComponent implements OnInit {
  private readonly primengConfig = inject(PrimeNGConfig);
  private readonly layoutService = inject(LayoutService);

  color = localStorage.getItem('colorScheme') || 'light';

  theme = localStorage.getItem('theme') || 'saga-purple';

  ngOnInit() {
    this.primengConfig.ripple = true;

    //optional configuration with the default configuration
    this.layoutService.config = {
      ripple: false, //toggles ripple on and off
      inputStyle: 'outlined', //default style for input elements
      menuMode: 'static', //layout mode of the menu, valid values are "static" and "overlay"
      colorScheme: 'light', //color scheme of the template, valid values are "light" and "dark"
      theme: 'saga-purple', //default component theme for PrimeNG
      scale: 14, //size of the body font size to scale the whole application
    };
  }
}
