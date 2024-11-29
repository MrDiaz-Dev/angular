import { Component, ElementRef, ViewChild, OnInit, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../../service/app.layout.service';
import { AppConfigComponent } from '../../config/app.config.component';
import { UsuarioService } from 'src/app/services/auth/usuario.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent implements OnInit {

  private readonly configComponent = inject(AppConfigComponent)

  items!: MenuItem[];

  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService) {}

  private readonly usuarioService = inject(UsuarioService)

  public userImage: any;

  ngOnInit(): void {
  }

  onConfigButtonClick() {
    this.configComponent.onConfigButtonClick()
  }
}
