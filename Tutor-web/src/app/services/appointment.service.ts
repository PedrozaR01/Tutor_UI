import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private URL = "http://localhost:8080/appointments";
  constructor(private http: HttpClient) { }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.URL}`);
  }

  createAppointment(data: Appointment): Observable<any> {
    return this.http.post(this.URL, data);
  }

  cancelAppointment(id: string): Observable<any> {
    return this.http.delete(`${this.URL}/${id}`);
  }
}
