import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppConfig } from './app.config';

@Injectable()
export class SetupGuard implements CanActivate {
  private setupRoute = '/setup';
  constructor(private appConfig: AppConfig, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (state.url === this.setupRoute) {
      if (!this.appConfig.setup) { return true; }
      this.router.navigate(['/login']);
      return false;
    }
    if (this.appConfig.setup) { return true };
    this.router.navigate([this.setupRoute]);
    return false;
  }
}
