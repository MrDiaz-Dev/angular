import {
  Component,
  ElementRef,
  ViewChild,
  OnInit,
  inject,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../service/app.layout.service';
import { AppConfigComponent } from '../../config/app.config.component';
import { UsuarioService } from 'src/app/services/auth/usuario.service';
import { NgClass } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  standalone: true,
  imports: [RouterLink, TooltipModule, NgClass],
  styles: [
    `
      * {
        color: #ffffff;
        background-color: #7283b0;
      }

      .layout-topbar-menu-mobile-active {
        background-color: #7283b0;
      }

      .layout-topbar .layout-topbar-button:hover {
        color: #ffffff;
        background-color: #505d7d;
        
        i, span {
          background-color: #505d7d;
        }
      }
    `,
  ],
})
export class AppTopBarComponent implements OnInit {
  private readonly configComponent = inject(AppConfigComponent);

  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) {}

  private readonly usuarioService = inject(UsuarioService);

  public userImage: any;

  ngOnInit(): void {}

  onConfigButtonClick() {
    this.configComponent.onConfigButtonClick();
  }
}
