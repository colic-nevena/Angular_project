import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../../../models/teacher';
import { State } from "../../../store";
import { Store } from "@ngrx/store";
import { LoadTeachers } from '../../../store/actions';


@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})


export class TeachersListComponent implements OnInit {

  teachers$: Observable<Teacher[]>;
  
  constructor(private store$: Store<State>) { }

  ngOnInit() {
    
    this.store$.dispatch(new LoadTeachers());
    this.teachers$ = this.store$.select(state => state.teachers);
  }

}
