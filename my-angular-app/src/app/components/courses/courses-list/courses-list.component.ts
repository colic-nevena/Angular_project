import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../../models/course';
import { State } from "../../../store";
import { Store } from "@ngrx/store";
import { LoadCourses, SelectCourse, SelectByDay } from '../../../store/actions';
import { SchoolService } from '../../../services/school.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})


export class CoursesListComponent implements OnInit {
  
  courses$: Observable<Course[]>;
  selectedCourse: Course;
  
  days = [
    { naziv: "ponedeljak"},
    { naziv: "utorak" },
    { naziv: "sreda" },
    { naziv: "četvrtak"},
    { naziv: "petak"},
    { naziv: "subota"}
]
  

  constructor(private store$: Store<State>) {
    
  }
   
   

  ngOnInit() {   
   
  this.courses$ = this.store$.select(state => state.courses);
    
  this.store$
    .select(state => state.selectedCourse)
    .subscribe(selected => {
    this.selectedCourse = selected;
    })
  }
  
  
  
  onSelected(course: Course) {    
    this.store$.dispatch(new SelectCourse(course))
  }
  
  
  
  selectByDay(dan) {    
    this.store$.dispatch(new SelectByDay(dan))
  }
 

}
