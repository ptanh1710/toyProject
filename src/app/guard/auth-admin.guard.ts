import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../service/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  constructor(private router: Router, private admin: AdminService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const routeurl: string = state.url;
      return this.isLogin(routeurl) == true;
  }
  isLogin(routeurl: string): any {
    if (this.admin.isLoggedIn()) {
      return true;
    }

    this.admin.redirectUrl = routeurl;
    this.router.navigate(['/admin-login']);
    // this.router.navigate(['/login'], {queryParams: { returnUrl: routeurl }} );
  }

}
