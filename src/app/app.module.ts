import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './layout/notfound/notfound.component';
import { AuthInterceptorService } from './services/auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PrimeNgModule } from './layout/shared/prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnvConfigService } from './services/utils/env-config.service';
import { environment } from 'src/environments/environment';
import * as envProd from 'src/environments/environment.prod';

export function initializeApp(configService: EnvConfigService) {
  return (): Promise<any> => {
    return configService
      .loadConfig()
      .toPromise()
      .then((config) => {
        configService.setConfig(config);
        environment.API_URL = configService.apiUrl;
        envProd.environment.API_URL = configService.apiUrl;
      });
  };
}

@NgModule({
  declarations: [AppComponent, NotfoundComponent],
  imports: [
    AppRoutingModule,
    AppLayoutModule,
    HttpClientModule,
    PrimeNgModule,
    BrowserAnimationsModule,
  ],
  providers: [
    EnvConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [EnvConfigService],
      multi: true
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
