import { Injectable }     from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot}    from '@angular/router';
import {LocalStorageService} from "angular-2-local-storage";
import {Consts} from "./consts";
import {Router} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private Consts: Consts
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let tarifRegistration: any = this.localStorageService.get(Consts.KEY_TARIF_REGISTRATION);
    if (state.url === '/tarifUser' && tarifRegistration == null) {
      this.router.navigate(['/tarifs']);
      return false;
    } else if (state.url === '/tarifInfo' && (tarifRegistration == null || tarifRegistration.email == null)) {
      this.router.navigate(['/tarifUser']);
      return false;
    } else if (state.url === '/tarifSummary' && (tarifRegistration == null || tarifRegistration.name == null)) {
      this.router.navigate(['/tarifInfo']);
      return false;
    } else {
      return true;
    }
  }
}
