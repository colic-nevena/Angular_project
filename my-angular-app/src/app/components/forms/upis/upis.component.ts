import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Student } from "../../../models/student";

@Component({
  selector: 'app-upis',
  templateUrl: './upis.component.html',
  styleUrls: ['./upis.component.css']
})

export class UpisComponent implements OnInit {

  student:Student = new Student(null,"", "", "","");
  
  @Output() add: EventEmitter<Student> = new EventEmitter<Student>();
  
  constructor() { }

  ngOnInit() {
  }
  
  
  onAddStudent() {
    this.add.emit({...this.student});
  }

}
