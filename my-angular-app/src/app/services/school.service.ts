import { Injectable } from '@angular/core';
import { Course } from "../models/course";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../models/teacher';
import { Student } from '../models/student';
import { map } from 'rxjs/operators';



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
    
    this.http.post('http://localhost:3000/prijavljeni', student
    ).subscribe(response => response);
  
    const ime = student.kurs;
    
    this.http.get<Course>(`http://localhost:3000/predmeti/?ime=${ime}`).subscribe(
      kurs => {
        const br = (kurs[0].mesta_na_kursu-1 > 0) ? kurs[0].mesta_na_kursu-1 : 0;
        const zab = br === 0 ? true : false;
        
        if(!zab) {
        const novi = {
          id: kurs[0].id,
          ime: kurs[0].ime,
          rating: kurs[0].rating,
          mesta_na_kursu: br,
          science: kurs[0].science,
          zabrana_rez: zab,
          dani: kurs[0].dani,
          sati: kurs[0].sati
        };
               
        this.http.put(`http://localhost:3000/predmeti/${kurs[0].id}`, novi).subscribe(response => response);
     } else
     alert(`Nažalost sva mesta na kursu ${kurs[0].ime} su popunjena.`)}
    )  
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
