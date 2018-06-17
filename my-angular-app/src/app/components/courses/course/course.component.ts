import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../models/course';
import { SchoolService } from '../../../services/school.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})


export class CourseComponent implements OnInit {

  @Input() public course: Course;
  @Input() public selected: boolean;
  @Output() public selectedCourse: EventEmitter<Course>= new EventEmitter<Course>();
  
  
  constructor(private servis: SchoolService) { 
    this.selected = false;
  }

  ngOnInit() {
  }
 
  
  public selectCourse() {
    this.selectedCourse.emit(this.course);
  }
  
  
  
}
