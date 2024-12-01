import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { AppTopBarComponent } from './shared/topbar/app.topbar.component';
import { AppConfigModule } from './config/config.module';
import { AppLayoutComponent } from './app.layout.component';
import { AppMenuComponent } from './shared/menu/app.menu.component';
import { AppFooterComponent } from './shared/footer/app.footer.component';
import { AppMenuitemComponent } from './shared/menu/app.menuitem.component';
import { AppSidebarComponent } from './shared/sidebar/app.sidebar.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { PrimeNgModule } from './shared/prime-ng/prime-ng.module';
import { AppConfigComponent } from './config/app.config.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';

import { CdkDrag } from '@angular/cdk/drag-drop';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppConfigModule,
        PanelMenuModule,
        MenuModule,
        ButtonModule,
        PrimeNgModule,
        CdkDrag,
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppMenuComponent,
        AppSidebarComponent,
        AppLayoutComponent,
        BreadcrumbsComponent,
    ],
    exports: [AppLayoutComponent],
    providers: [AppConfigComponent],
})
export class AppLayoutModule {}
