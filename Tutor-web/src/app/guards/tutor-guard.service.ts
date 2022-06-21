import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class TutorGuardService implements CanActivate {

  realRole!: string;

  constructor(
    private tokenServ: TokenService,
    private router: Router) { }
    
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const roles = this.tokenServ.getAuthorities();
    this.realRole = 'student';
    roles.forEach(role =>{
      if(role === 'ROLE_TUTOR'){
        this.realRole = 'tutor';
      }
      if(role === 'ROLE_ADMIN'){
        this.realRole = 'admin';
      }
    });
    console.log(expectedRole.indexOf(this.realRole));
    console.log(expectedRole[0]);
    if (!this.tokenServ.getToken() || expectedRole.indexOf(this.realRole) === -1){
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
