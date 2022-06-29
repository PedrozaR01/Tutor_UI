import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/models/Subject';
import { SubjectService } from 'src/app/services/subject.service';
import { mergeMap } from 'rxjs';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css']
})
export class CreateSubjectComponent implements OnInit {

  subject!: Subject;
  allSubjects!: Subject[];
  subjectTitle!: string;
  columns = ['subjects', 'delete'];

  constructor(
    private subjectServ: SubjectService
  ) { }

  ngOnInit(): void {
    this.subjectServ.getSubjects().subscribe(
      data => {
        this.allSubjects = data;
      }
    );
  }

  onCreate(){
    console.log(this.subjectTitle);
    this.subject = new Subject();
    this.subject.subjectTitle = this.subjectTitle;

    this.subjectServ.postSubject(this.subject).pipe(
      mergeMap(() => this.subjectServ.getSubjects())
    ).subscribe( data =>{
      this.allSubjects = data;
    }
    );
  }

  onDelete(id: string){
    this.subjectServ.deleteSubject(id).pipe(
      mergeMap(() => this.subjectServ.getSubjects())
    ).subscribe(data => {
      this.allSubjects = data;
    });
  }

}
