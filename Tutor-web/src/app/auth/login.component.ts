import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../models/user-login';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  userLogin!: UserLogin;
  userJSON: any;
  userName!: string;
  password!: string;
  roles: string[] = [];
  errMsg!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) { 
    this.userLogin = new UserLogin();
  }

  ngOnInit() {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(){
    this.userLogin.userName = this.userName;
    this.userLogin.password = this.password;
    console.log(typeof this.userLogin);
    console.log(this.userLogin);
    this.authService.login(this.userLogin).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.userName);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        //this.router.navigate(["/"]);
      }, err =>{
        this.isLogged = false;
        this.isLoginFail = true;
      }
    );
  }

}
