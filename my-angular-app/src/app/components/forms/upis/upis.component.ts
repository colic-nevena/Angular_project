import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Student } from "../../../models/student";
import { State } from "../../../store";
import { Store } from "@ngrx/store";
import { SchoolService } from "../../../services/school.service"
import { Observable } from 'rxjs';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-upis',
  templateUrl: './upis.component.html',
  styleUrls: ['./upis.component.css']
})

export class UpisComponent implements OnInit {
  courses$: Observable<Course[]>;
  student:Student = new Student(null,"", "", "","");

  
  
  constructor(private store$: Store<State>, private servis: SchoolService) { }
 
  
  ngOnInit() {
    this.courses$ = this.store$.select(state => state.courses);
  }
  
  
  onAddStudent(student: Student) {    
    this.servis.addNewStudent(student);
  }

  
  
  
}
