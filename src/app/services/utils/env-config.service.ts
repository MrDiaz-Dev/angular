import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as envProd from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class EnvConfigService {
  config: any = null;

  constructor(private http: HttpClient) {}

  fileDir: string;

  loadConfig(): Observable<any> {
    this.fileDir = environment.production || environment.dev
      ? 'assets/config.json'
      : '../../assets/config.json';
    return this.http.get(this.fileDir);
  }

  getConfig(): any {
    return this.config;
  }

  isAllReady(): boolean {
    console.log('config => ', this.config);
    console.log('isAllReady => ', this.config ? true : false);
    return this.config != null ? true : false;
  }

  setConfig(config: any): void {
    this.config = config;
  }

  get apiUrl(): string {
    return this.config ? this.config.API_URL : '';
  }

  initializeEnv() {
    return (): Promise<any> => {
      return this
        .loadConfig()
        .toPromise()
        .then((config) => {
          this.setConfig(config);
          environment.API_URL = this.apiUrl;
          envProd.environment.API_URL = this.apiUrl;
          console.log('envs =>');
          console.log(environment.API_URL);
          console.log(envProd.environment.API_URL);
        });
    };
  }
}
