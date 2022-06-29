import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/Appointment';
import { TutorJoin } from 'src/app/models/tutor-join';
import { AppointmentService } from 'src/app/services/appointment.service';
import { JoinService } from 'src/app/services/join.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userName: string;
  userRoles: string[];
  public appointments: Appointment[] = [];
  public filtAppoint: Appointment[] = [];
  public tutors: TutorJoin[] = [];
  public filtTutors: TutorJoin[] = [];
  public columns = ['appointmentDate', 'tutorId'];
  public successMsg!: string;
  public errorMsg!: string;
  public loading = true;
  
  constructor(
    private tokenService: TokenService,
    private appointmentServ: AppointmentService,
    private tutorServ: JoinService) {
      this.userName = this.tokenService.getUserName();
      this.userRoles = this.tokenService.getAuthorities();
      
     }
 
  ngOnInit(): void {
    this.appointmentServ.getAppointments().subscribe((appointments: Appointment[]) =>
      {
        this.appointments = appointments;
        this.loading = false;
        this.filtAppoint = this.appointments.filter(
          (appoint) => {
            return appoint.createdBy == this.userName;
          }
        )

    });
    this.tutorServ.list().subscribe(
      (tutor: TutorJoin[]) => {
        this.tutors = tutor;
        this.filtTutors = this.tutors.filter(
          (tutor) => {
            return tutor.createdBy == this.userName;
          }
        )
      }
    );
    console.log(this.tutors);
  }

}
