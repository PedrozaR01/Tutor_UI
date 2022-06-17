import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NewUser } from '../models/new-user';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser!: NewUser;
  name!: string;
  userName!: string;
  email!: string;
  password!: string;
  isLogged = false;

  constructor(
    private tokenServ: TokenService,
    private authServ: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    if (this.tokenServ.getToken()){
      this.isLogged = true;
    } 
  }

  onRegister(): void {
    this.newUser = new NewUser();
    this.newUser.name = this.name;
    this.newUser.userName = this.userName;
    this.newUser.email = this.email;
    this.newUser.password = this.password;

    this.authServ.new(this.newUser).subscribe(
      data => {

        this.toastr.success('Account succesfully created', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        
        this.router.navigate(['/login']);
      }
    );
  }

}
