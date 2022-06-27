import { Injectable } from '@angular/core';
import { globals } from '@bc/global-variables';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private globals: globals) {

  }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    if (!this.globals.loginFlag) {
      this.router.navigate(["login"]);
      return false;
    }

    return true;
  }

}
