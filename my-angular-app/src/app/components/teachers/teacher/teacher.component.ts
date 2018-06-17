import { Component, OnInit, Input } from '@angular/core';
import { Teacher } from "../../../models/teacher";
import { SchoolService } from '../../../services/school.service';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  @Input() public teacher: Teacher;
  
  constructor(private servis: SchoolService) { }

  ngOnInit() {
  }
  
  
  public rateTeacher(teacher: Teacher) {    
    
    
    this.teacher.rating = (this.teacher.rating+0.1 < 5) ? this.teacher.rating+0.1 : 5;
    this.servis.updateTeacher(teacher);
  }
  

}
