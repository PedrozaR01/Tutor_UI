import { MAT_DATE_FORMATS } from '@angular/material/core';
import { NgxMatDateFormats, NGX_MAT_DATE_FORMATS } from '@angular-material-components/datetime-picker';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { TutorJoin } from 'src/app/models/tutor-join';
import { JoinService } from 'src/app/services/join.service';

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
  tutorId: '', firstName: '', lastName: '', intro: '', tutorImg: '', subjectId: '', subjectTitle: ''}
  
public successMsg!: string;
  public errorMsg!: string;
  appointmentDate!: string;
  name!: string;
  email!: string;

  constructor(
    private appointmentService: AppointmentService,
    private joinService: JoinService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.getTutor();
  }

  getTutor(): void{
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.joinService.get(id).subscribe( tutor => this.tutor = tutor);
    console.log( this.tutor.tutorId );
  }

  createAppointment() {
    this.successMsg = '';
    this.errorMsg = '';
    const date = new Date(this.appointmentDate)
    const isoString: string = date.toISOString();
    const isoDate = new Date(isoString);
    const mySqlDate = isoDate.toJSON().slice(0, 19).replace('T', ' ');
    this.appointmentService.createAppointment(mySqlDate, this.name, this.email, this.tutor.tutorId)
      .subscribe((createdAppointment: Appointment) => {
        this.appointmentDate = '';
        this.name = '';
        this.email = '';
        this.successMsg = `Appointment Booked Successfully for ${isoString}`;
      },
      (error: ErrorEvent) => {
        this.errorMsg = error.error.message;
      });
  }
}
