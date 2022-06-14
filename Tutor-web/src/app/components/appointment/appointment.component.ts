import { MAT_DATE_FORMATS } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { TutorJoin } from 'src/app/models/tutor-join';
import { JoinService } from 'src/app/services/join.service';
import { mergeMap } from 'rxjs';
import { TokenService } from 'src/app/services/token.service';

export const CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: "YYYY-MM-DD"
  },
  display: {
    dateInput: "YYYY-MM-DD",
    monthYearLabel: "YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "YYYY"
  }
};

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS }],
  
})
export class AppointmentComponent implements OnInit {
@Input() tutor: TutorJoin = {
  tutor_id: '', firstName: '', lastName: '', intro: '', tutorImg: '', subjects: []}
  
  public successMsg!: string;
  public errorMsg!: string;
  appointment: Appointment;
  appointmentDate!: string;
  tutorid!: number;
  public loading = true;
  public errorMsgT!: string;
  public successMsgT!: string;
  public appointments: Appointment[] = [];
  public filtAppointments: Appointment[] = [];
  public columns = ['appointmentDate', 'name', 'email', 'cancel'];
  public isLogged = false;

  constructor(
    private appointmentService: AppointmentService,
    private joinService: JoinService,
    private route: ActivatedRoute,
    private tokenServ: TokenService
    ) {
      this.appointment = new Appointment();
     }

  ngOnInit() {
    if(this.tokenServ.getToken()){
      this.isLogged = true;
      this.getTutor();
    this.appointmentService.getAppointments()
    .subscribe((appointments: Appointment[]) => {
      this.appointments = appointments;
      this.loading = false;
      this.tutorid = Number(this.tutor.tutor_id);
    this.filtAppointments = this.appointments.filter((appoint) =>{
      return appoint.tutorId == this.tutorid;
    });
    console.log(this.filtAppointments);
    },
    (error: ErrorEvent) => {
      this.errorMsg = error.error.message;
      this.loading = false;
    });
    } else {
      this.isLogged = false;
    }
    
  }

  getTutor(): void{
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.joinService.get(id).subscribe( tutor => {
      this.tutor = tutor;
      console.log( this.tutor );
    });
  }

  createAppointment() {
    this.successMsg = '';
    this.errorMsg = '';
    const date = new Date(this.appointmentDate);
    //for some reason, the datetime picker adds 6 hours to the current one so it is required to substract 6 hours
    date.setHours(date.getHours()-6);
    const isoString: string = date.toISOString();
    const isoDate = new Date(isoString);
    const mySqlDate = isoDate.toJSON().slice(0, 19).replace('T', ' ');
    this.appointment.appointmentDate = mySqlDate;
    this.appointment.tutorId = Number(this.tutor.tutor_id);

    this.appointmentService.createAppointment(this.appointment)
      .subscribe((createdAppointment: Appointment) => {
        this.appointmentDate = '';
        this.successMsg = `Appointment Booked Successfully for ${isoString} with ${this.tutor.firstName}`;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }

  cancelAppointment(id: string) {
    this.appointmentService.cancelAppointment(id)
      .pipe(
        mergeMap(() => this.appointmentService.getAppointments())
      )
      .subscribe((appointments: Appointment[]) => {
        this.appointments = appointments;
        this.successMsg = 'Successfully cancelled appointment';
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }
}
