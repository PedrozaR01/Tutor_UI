import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorJoin } from 'src/app/models/tutor-join';
import { JoinService } from 'src/app/services/join.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  tutors!: TutorJoin[];
  search : String ="";
  public sort!: string;

  constructor(
    private joinService: JoinService,
    private router: Router
  ) { }

  ngOnInit(){
    this.joinService.list().subscribe(data => {
      this.tutors = data;
    })
  }

}
