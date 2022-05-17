import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/Appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private URL = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  getAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.URL}/appointments`);
  }

  createAppointment(appointmentDate: string, name: string, email: string, tutorid: string): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.URL}/appointments`, { appointmentDate, name, email, tutorid });
  }

  cancelAppointment(id: string): Observable<any> {
    return this.http.delete(`${this.URL}/appointments/${id}`);
  }
}
