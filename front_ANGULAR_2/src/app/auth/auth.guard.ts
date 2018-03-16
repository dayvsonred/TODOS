import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
     //console.log("atenticando");
    if (this.authService.isAuthenticated()) {
      return true;
    }
    /** se nao autenticar ele retorna false e vai para a rota abaixo */
    this.router.navigate(['/signin']);
    return false;
  }


}
