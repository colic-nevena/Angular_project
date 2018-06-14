import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})


export class CourseComponent implements OnInit {

  @Input() public course: Course;
  @Input() public selected: boolean;
  @Output() public selectedCourse: EventEmitter<Course>= new EventEmitter<Course>();
  
  
  constructor() { 
    this.selected = false;
  }

  ngOnInit() {
  }

  
  
  public selectCourse() {
    this.selectedCourse.emit(this.course);
  }
  
  
  
  
}
