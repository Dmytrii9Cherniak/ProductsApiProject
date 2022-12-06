import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {StorageService} from "../services/storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private storageService: StorageService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.storageService.getToken()) {
      return true;
    }

    this.router.navigate(['login'],
      {queryParams: {returnUrl: state.url}
    })

    return false;
  }

}
