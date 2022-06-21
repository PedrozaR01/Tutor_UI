import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userName: string;
  userRoles: string[];
  
  constructor(
    private tokenService: TokenService,) {
      this.userName = this.tokenService.getUserName();
      this.userRoles = this.tokenService.getAuthorities();
     }

  ngOnInit(): void {
    console.log(this.userName);
  }

}
