import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { AppConfigComponent } from 'src/app/layout/config/app.config.component';
import { PrimeNgModule } from 'src/app/layout/shared/prime-ng/prime-ng.module';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        FormsModule,
        ReactiveFormsModule,
        PrimeNgModule
    ],
    declarations: [LoginComponent],
    providers: [AppConfigComponent]
})
export class LoginModule { }