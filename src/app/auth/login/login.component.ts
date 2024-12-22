import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CustomMessageService } from 'src/app/services/utils/message.service';
import { UsuarioService } from 'src/app/services/auth/usuario.service';

import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AppConfigComponent } from 'src/app/layout/config/app.config.component';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { PrimeNgModule } from 'src/app/layout/shared/prime-ng/prime-ng.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      :host ::ng-deep .pi-eye,
      :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }
    `,
  ],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    RippleModule,
    PrimeNgModule,
  ],
})
export class LoginComponent implements OnInit {
  // valCheck: string[] = ['remember'];

  // password!: string;

  constructor(
    public layoutService: LayoutService,
    private fb: UntypedFormBuilder,
    private router: Router,
    private usuarioService: UsuarioService,
    private messageService: CustomMessageService,
    private appConfigComponent: AppConfigComponent,
  ) {}

  public loading: boolean = false;

  myForm: UntypedFormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    aplicacion: ['personal', [Validators.required]],
  });

  ngOnInit(): void {
    this.usuarioService.removeStorage();
    localStorage.removeItem('recarga');
    if (localStorage.getItem('theme')) {
      let tema = localStorage.getItem('theme');
      let color = localStorage.getItem('colorScheme');
      let escala = localStorage.getItem('escala');
      this.appConfigComponent.changeTheme(tema, color);
      document.documentElement.style.fontSize = escala + 'px';
    }
  }

  login() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      this.messageService.error('Check your input data');
      return;
    }

    this.loading = true;

    let interval = setInterval(() => {
      if (this.usuarioService.canDoSomething()) {
        this.usuarioService.login(this.myForm.value).subscribe(
          (resp) => {
            this.messageService.success(
              'You have entered to the system successfully',
            );
            localStorage.setItem('username', `${this.myForm.value.username}`);
            this.router.navigateByUrl('/');
          },
          (error) => {
            console.log(error);
            this.loading = false;
            this.messageService.error(error.message);
          },
        );
        clearInterval(interval);
      }
    }, 500);
  }

  campoValido(campo: string) {
    return (
      this.myForm.controls[campo].errors && this.myForm.controls[campo].touched
    );
  }
}
