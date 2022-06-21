import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TutorJoin } from 'src/app/models/tutor-join';
import { JoinService } from 'src/app/services/join.service';

@Component({
  selector: 'app-create-tutor',
  templateUrl: './create-tutor.component.html',
  styleUrls: ['./create-tutor.component.css']
})
export class CreateTutorComponent implements OnInit {

  newTutor!: TutorJoin;
  tutorFirstName!: string;
  tutorLastName!: string;
  tutorIntro!: string;
  tutorImg!: string;
  subjects!: [];

  constructor(
    private tutorServ: JoinService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  onCreateTutor(){
    this.newTutor = new TutorJoin();
    this.newTutor.firstName = this.tutorFirstName;
    this.newTutor.lastName = this.tutorLastName;
    this.newTutor.intro = this.tutorIntro;
    this.newTutor.tutorImg = this.tutorImg;
    this.newTutor.subjects = this.subjects;
    this.tutorServ.post(this.newTutor).subscribe( 
      data => {
        this.toastr.success('Tutor created succesfully', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      }
    )
  }
}
