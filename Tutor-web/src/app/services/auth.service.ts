import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { JwtDto } from '../models/jwt-dto';
import { NewUser } from '../models/new-user';
import { UserLogin } from '../models/user-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public new(newUser: NewUser): Observable<any>{
  return this.httpClient.post<any>(this.authURL + "new", newUser);
}

public login(userLogin: UserLogin): Observable<JwtDto>{
  return this.httpClient.post<JwtDto>(this.authURL + "login", UserLogin);
}

}
