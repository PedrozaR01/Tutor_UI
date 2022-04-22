import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  /*getCoursesList(
    ordering: string,
    search?: string
    ): Observable<APIResponse<Course>> {
      let params = new HttpParams().set('ordering', ordering);

      if(search) {
        params = new HttpParams().set('ordering', ordering).set('search', search);
      }

      return this.http.get<APIResponse<Course>>('${env.BASE_URL}/courses', {
        params: params, 
      })
  }*/
}
