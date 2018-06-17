import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Student } from "../../../models/student";
import { SchoolService } from '../../../services/school.service';


@Component({
  selector: 'app-ispis',
  templateUrl: './ispis.component.html',
  styleUrls: ['./ispis.component.css']
})


export class IspisComponent implements OnInit {

  public student:Student = new Student(null, "", "", "", "");
  
  constructor(private servis: SchoolService) { }

  
  ngOnInit() {
  }
  
  onDeleteStudent(student: Student) {
    this.servis.deleteStudent(student);
    this.student.ime = "";
    this.student.prezime = "";
    this.student.email = "";
  }

}
