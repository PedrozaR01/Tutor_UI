import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorJoin } from 'src/app/models/tutor-join';
import { JoinService } from 'src/app/services/join.service';
import { TutorPipe } from 'src/app/pipes/tutor.pipe';
import { Subject } from 'src/app/models/Subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  tutors!: TutorJoin[];
  subjects!: Subject[];
  filter : String ="";
  public sort!: string;

  constructor(
    private joinService: JoinService,
    private router: Router,
    private subjectServ: SubjectService
  ) { }

  ngOnInit(){
    this.joinService.list().subscribe(data => {
      this.tutors = data;
    });
    this.subjectServ.getSubjects().subscribe(data => {
      this.subjects = data;
    });
  
  }

}
