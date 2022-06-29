import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from '../models/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private URL = "http://localhost:8080/subjects";

  constructor(private http: HttpClient) {

   }

   getSubjects(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.URL);
   }

   postSubject(subject: Subject): Observable<any>{
    return this.http.post(this.URL, subject);
   }

   deleteSubject(id: string): Observable<any>{
    return this.http.delete(`${this.URL}/${id}`);
   }
}
