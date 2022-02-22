import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router, private api: ApiService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {
      const routeurl: string = state.url;
      return this.isLogin(routeurl) == true;
    }
    isLogin(routeurl: string): any {
      if (this.api.isLoggedIn()) {
        return true;
      }

      this.api.redirectUrl = routeurl;
      this.router.navigate(['/login']);
      // this.router.navigate(['/login'], {queryParams: { returnUrl: routeurl }} );
    }

}
