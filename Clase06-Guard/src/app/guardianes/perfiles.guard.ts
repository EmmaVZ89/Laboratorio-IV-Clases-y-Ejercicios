import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AutentificadorService } from '../servicios/autentificador.service';

@Injectable({
  providedIn: 'root',
})
export class PerfilesGuard implements CanActivate {
  constructor(
    private autentificadorService: AutentificadorService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    console.log('Paso por el guard');
    console.info("Route: ", route);
    console.info("State: ", state);
    console.info("Ruta: ", state.url);
    
    // if (this.autentificadorService.estaLogeado) {
    //   console.log('Esta logeado!!!');
    //   return true;
    // }
    // console.log('No se Quien sos!!!');
    // return false;

    // if (this.autentificadorService.estaLogeado) {
    //   console.log('Esta logeado!!!');
    // } else {
    //   console.log('No se Quien sos!!!');
    //   this.router.navigate(['/errorLogin']);
    // }
    // return true;

    return this.verificadorDePerfil();
  }

  verificadorDePerfil(){
    if (this.autentificadorService.estaLogeado) {
      console.log('Esta logeado!!!');
    } else {
      console.log('No se Quien sos!!!');
      this.router.navigate(['/errorLogin']);
    }
    return true;
  }
}
