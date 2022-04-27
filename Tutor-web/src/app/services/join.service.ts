import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TutorJoin } from 'src/app/models/tutor-join';

@Injectable()
export class JoinService {

  private TutorURL: string;

  constructor(private http: HttpClient) {
    this.TutorURL = 'http://localhost:8080/tutorsubject';
   }

   list(): Observable<any>{
     return this.http.get(this.TutorURL);
   }
}
