import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Student } from "../../../models/student";


@Component({
  selector: 'app-ispis',
  templateUrl: './ispis.component.html',
  styleUrls: ['./ispis.component.css']
})


export class IspisComponent implements OnInit {

  student:Student = new Student(null,"", "", "","");
  @Output() delete: EventEmitter<Student> = new EventEmitter<Student>();
  
  constructor() { }

  
  ngOnInit() {
  }
  
  onDeleteStudent() {
    this.delete.emit({...this.student});
  }

}
