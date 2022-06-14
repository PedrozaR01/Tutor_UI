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


  isLogged = false;

  constructor(private router: Router,
    private toeknServ: TokenService) { }

  ngOnInit(){
    if(this.toeknServ.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void{
    this.toeknServ.logOut();
    window.location.reload(); 
  }

}
