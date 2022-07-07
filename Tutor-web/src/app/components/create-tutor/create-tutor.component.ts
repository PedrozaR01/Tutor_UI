import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'src/app/models/Subject';
import { TutorJoin } from 'src/app/models/tutor-join';
import { JoinService } from 'src/app/services/join.service';
import { SubjectService } from 'src/app/services/subject.service';
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
  subjects!: Subject[];
  selectedSubjects: any[] = [];
  tutorSubj: string[] = [];

  constructor(
    private tutorServ: JoinService,
    private toastr: ToastrService,
    private tokenServ: TokenService,
    private subjectServ: SubjectService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.subjectServ.getSubjects().subscribe(
      data => {
        this.subjects = data;
      }
    )
  }


  addToArray(feature:any){
    this.selectedSubjects.push(feature);
} 
  onChange(selected: any){
    console.log(selected.target.subjectTitle);
  }

  onCreateTutor(){
    this.newTutor = new TutorJoin();
    this.newTutor.firstName = this.tutorFirstName;
    this.newTutor.lastName = this.tutorLastName;
    this.newTutor.intro = this.tutorIntro;
    this.newTutor.tutorImg = this.tutorImg;
    this.newTutor.subjects = this.selectedSubjects;

    this.createdBy = this.tokenServ.getUserName();

    this.newTutor.createdBy = this.createdBy;


    console.log(this.newTutor.subjects);
    this.tutorServ.post(this.newTutor).subscribe( 
      data => {
        this.toastr.success('Tutor created succesfully', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
      }
    )
  }
}
