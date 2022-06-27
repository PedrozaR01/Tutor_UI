import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  roles: string[] = [];
  isLogged = false;
  hasPermi = false;

  constructor(private router: Router,
    private toeknServ: TokenService) { }

  ngOnInit(){
    if(this.toeknServ.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.roles = this.toeknServ.getAuthorities();
    this.roles.forEach(role => {
      if(role === 'ROLE_TUTOR'){
        this.hasPermi = true;
        console.log("true");
      } else if (role === 'ROLE_ADMIN'){
        this.hasPermi = true;
        console.log("true");
      } else {
        //this.hasPermi = false;
        console.log("false");
      }
    });
  }

  onLogOut(): void{
    this.toeknServ.logOut();
    window.location.reload(); 
  }

}
