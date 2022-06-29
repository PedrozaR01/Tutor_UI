import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TutorJoin } from 'src/app/models/tutor-join';
import { JoinService } from 'src/app/services/join.service';
import { TokenService } from 'src/app/services/token.service';

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
  createdBy!: string;
  subjects!: string;
  tutorSubj: string[] = [];

  constructor(
    private tutorServ: JoinService,
    private toastr: ToastrService,
    private tokenServ: TokenService
  ) { }

  ngOnInit(): void {
  }

  onCreateTutor(){
    this.newTutor = new TutorJoin();
    this.newTutor.firstName = this.tutorFirstName;
    this.newTutor.lastName = this.tutorLastName;
    this.newTutor.intro = this.tutorIntro;
    this.newTutor.tutorImg = this.tutorImg;
    this.tutorSubj.push(this.subjects);
    this.newTutor.subjects = this.tutorSubj;

    this.createdBy = this.tokenServ.getUserName();

    this.newTutor.createdBy = this.createdBy;

    this.tutorServ.post(this.newTutor).subscribe( 
      data => {
        this.toastr.success('Tutor created succesfully', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      }
    )
  }
}
