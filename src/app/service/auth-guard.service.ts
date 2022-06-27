import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { globals } from '../global-variables';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private globals: globals) {

  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    if (!this.globals.loginFlag) {
      this.router.navigate(["/login"]);
      return false;
    }

    return true;
  }

}
