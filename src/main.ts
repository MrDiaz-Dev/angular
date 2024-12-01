import { enableProdMode, APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PrimeNgModule } from './app/layout/shared/prime-ng/prime-ng.module';
import { AppLayoutModule } from './app/layout/app.layout.module';
import { AppRoutingModule } from './app/app-routing.module';
import { AuthInterceptorService } from './app/services/auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS, withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { EnvConfigService } from './app/services/utils/env-config.service';
import * as envProd from 'src/environments/environment.prod';

if (environment.production) {
  enableProdMode();

  window.console.log = () => {};
} else {
  environment.dev = true;
}

export function initializeApp(configService: EnvConfigService) {
  return (): Promise<any> => {
    return configService
      .loadConfig()
      .toPromise()
      .then((config) => {
        configService.setConfig(config);
        environment.API_URL = '';
        envProd.environment.API_URL = '';
        environment.API_URL = configService.apiUrl;
        envProd.environment.API_URL = configService.apiUrl;
        environment.STORAGE_URL = configService.storageUrl;
        envProd.environment.STORAGE_URL = configService.storageUrl;
      });
  };
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(AppRoutingModule, AppLayoutModule, PrimeNgModule),
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
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
    ]
})
  .catch((err) => console.error(err));
