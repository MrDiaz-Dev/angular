import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { UsuarioService } from '../services/auth/usuario.service';
import { CustomMessageService } from '../services/utils/message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private router: Router,
              private usuarioService: UsuarioService,
              private messageService: CustomMessageService,
              ){};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      // console.log('PASO POR EL GUARD AUTH');

      this.usuarioService.verificarCaducudadToken();

     let token = localStorage.getItem('token');
     let usuario = localStorage.getItem('usuario');

      if(token && usuario){
        return true;
      } else {
        this.router.navigateByUrl('/auth/login');
        this.messageService.alert('Sesion expirada')
        return false;
        // return true;
      }

  }

}