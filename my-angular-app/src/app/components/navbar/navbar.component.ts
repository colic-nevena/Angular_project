import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models/course';
import { State } from "../../store";
import { Store } from "@ngrx/store";
import { LoadCourses, SelectCourse } from '../../store/actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  courses$: Observable<Course[]>;

  constructor(private store$: Store<State>) { }

  ngOnInit() {   
      
  this.store$.dispatch(new LoadCourses());
  this.courses$ = this.store$.select(state => state.courses);
  }

}
