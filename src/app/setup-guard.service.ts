import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class SetupGuard implements CanActivate {
  private setupRoute = '/setup';
  constructor(private storage: SessionStorageService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (state.url === this.setupRoute) {
      if (!this.storage.retrieve('setup')) {
        return true;
      }
      this.router.navigate(['/login']);
      return false;
    }
    if (this.storage.retrieve('setup')) {
      return true;
    }
    this.router.navigate([this.setupRoute]);
    return false;
  }
}
