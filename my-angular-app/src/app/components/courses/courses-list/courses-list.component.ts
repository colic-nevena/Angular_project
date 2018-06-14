import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../../models/course';
import { State } from "../../../store";
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})


export class CoursesListComponent implements OnInit {
  
  courses$: Observable<Course[]>;
  selectedCourse: Course;

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
    console.log("Selektovan je: " + course);
    //this.store$.dispatch(new SelectCourse(course))
  }
  
  
  
  
  

}
