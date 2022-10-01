import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HealthService } from './health.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HealthauthGuard implements CanActivate {
  constructor(private service: HealthService,private router: Router){

  }
  canActivate() {
      console.log(this.service.isUserLogged);
      if(this.service.isUserLogged){
        return true;
      }
      this.router.navigate(['']);
      return false;
  }
  
}