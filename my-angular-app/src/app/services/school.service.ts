import { Injectable } from '@angular/core';
import { Course } from "../models/course";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../models/teacher';
import { Student } from '../models/student';



@Injectable({
  providedIn: 'root'
})

export class SchoolService {
  
  
  constructor(private http: HttpClient) { } 
    
  
  getCourses() : Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:3000/predmeti');  
  }
  
  
  
  getTeachers() : Observable<Teacher[]> {    
    return this.http.get<Teacher[]>('http://localhost:3000/nastavnici');  
  }
  
  
  addNewStudent(student: Student) : void {
    
    console.log(student.kurs);
    this.http.post('http://localhost:3000/prijavljeni', student
    ).subscribe(response => response);
    //prvo vrati kurs po imenu pa onda pravi novi objekat za PUT
    
    //this.http.get<Course[]>('http://localhost:3000/predmeti')
  }
  
  
  /*
  public static getCourses() {              
    return fetch('http://localhost:3000/predmeti')
      .then(response => response.json())
  }
   
   
   
   
  public static getStudents() {              
    return fetch('http://localhost:3000/prijavljeni')
      .then(response=>response.json())
  }
      
      
      
      
      
  public static getTeachers() {              
    return fetch('http://localhost:3000/nastavnici')
      .then(response=>response.json())
  }
      
   
   
  public getStudentByEmail(email) {
    return fetch(`http://localhost:3000/prijavljeni/?email=${email}`)
      .then( response => response.json());
  }
   
   
   
  public static getCourseByName(ime) {
    return fetch(`http://localhost:3000/predmeti/?ime=${ime}`)
      .then( response => response.json());
   }
   
   
   
   
  public static getSelected(id) {
    return fetch(`http://localhost:3000/predmeti/${id}`)
      .then(response => response.json())
   }
   
   
   
   
  public static deleteStudent(id) {
    return fetch(`http://localhost:3000/prijavljeni/${id}`,{
      method:"DELETE"
      }).then(response => response.json());        
  }
   
   
   
  public static updateCourse(id, data) {
    return fetch(`http://localhost:3000/predmeti/${id}`, {
      method: 'PUT',
      headers: {
          'Accept': 'application/json,text/plain',
          'Content-Type': 'application/json'
          },
   
      body: JSON.stringify(data)
    }).then(res => res.json())
      
  }
   
   
   
   
  public static addStudent(data) {
    return fetch('http://localhost:3000/prijavljeni', {
      method: 'POST',
      headers: {
          'Accept': 'application/json,text/plain',
          'Content-Type': 'application/json'
          },
   
      body: JSON.stringify(data)
      }).then(res => res.json())
        
  }
  */
  
  
  
  
  
}
