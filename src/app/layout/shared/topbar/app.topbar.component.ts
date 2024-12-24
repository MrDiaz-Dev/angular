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
// import { MediaObserver, MediaChange } from '@angular/flex-layout';

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

        i,
        span {
          background-color: #505d7d;
        }
      }

      // .no-in-md {
      //   @media (max-width: 991.98px) {
      //     display: none;
      //   }
      // }
      // .no-in-md-2 {
      //   @media (max-width: 550px) {
      //     display: none;
      //   }
      // }
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

  // private readonly mediaObserver = inject(MediaObserver);

  public userImage: any;

  mediaQuery: string = 'xl';

  ngOnInit(): void {
    // this.mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
    //   console.log('MediaQuery: ', changes);
    //   changes.forEach((change: MediaChange) => {
    //     this.mediaQuery = change.mqAlias;
    //     // console.log('MediaQuery: ', change);
    //   });
    //   // console.log('MediaQuery: ', this.mediaQuery);
    // });
  }

  onConfigButtonClick() {
    this.configComponent.onConfigButtonClick();
  }

  logout() {
    this.usuarioService.logout();
  }
}
