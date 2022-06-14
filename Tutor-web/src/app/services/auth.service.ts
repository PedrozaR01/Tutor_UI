import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { JwtDto } from '../models/jwt-dto';
import { NewUser } from '../models/new-user';
import { UserLogin } from '../models/user-login';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  requestOptions = { headers: this.headers };
  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public new(newUser: NewUser): Observable<any>{
  return this.httpClient.post<any>(this.authURL + "new", newUser);
}

public login(userLogin: UserLogin): Observable<any>{
  const body = userLogin;
  console.log(body);
  return this.httpClient.post("http://localhost:8080/auth/login", body, this.requestOptions);
}

}
