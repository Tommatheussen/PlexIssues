import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private loginRoute = '/login';
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (state.url === this.loginRoute) {
      if (!this.authService.loggedIn) { return true; }
      this.router.navigate(['/home']);
      return false;
    }
    if (this.authService.loggedIn) { return true };
    this.router.navigate([this.loginRoute]);
    return false;
  }
}
