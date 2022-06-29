import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TutorJoin } from 'src/app/models/tutor-join';
import { JoinService } from 'src/app/services/join.service';
import { Appointment } from 'src/app/models/Appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-tutor-page',
  templateUrl: './tutor-page.component.html',
  styleUrls: ['./tutor-page.component.css']
})
export class TutorPageComponent implements OnInit {
  @Input() tutor: TutorJoin = {
    tutor_id: '', firstName: '', lastName: '', intro: '', tutorImg: '', createdBy: '', subjects: []}
    
    public successMsg!: string;
    public errorMsg!: string;
    appointmentDate!: string;
    tutorid!: number;
    public loading = true;
    public errorMsgT!: string;
    public successMsgT!: string;
    public appointments: Appointment[] = [];
    public filtAppointments: Appointment[] = [];
    public columns = ['appointmentDate'];

    constructor(
      private appointmentService: AppointmentService,
      private joinService: JoinService,
      private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.getTutor();
    this.appointmentService.getAppointments()
    .subscribe((appointments: Appointment[]) => {
      this.appointments = appointments;
      this.loading = false;
      this.tutorid = Number(this.tutor.tutor_id);
      this.filtAppointments = this.appointments.filter((appoint) =>{
        return appoint.tutorId == this.tutorid;
      });
      console.log(this.appointments);
    });
      
      
  }

  getTutor(): void{
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.joinService.get(id).subscribe( tutor => {
      this.tutor = tutor;
      console.log( this.tutor );
    });
  }

}
