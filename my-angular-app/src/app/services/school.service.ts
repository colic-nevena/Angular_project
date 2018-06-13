import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor() { }
  
  
  
  public getCourses() {              
    return fetch('http://localhost:3000/predmeti')
      .then(response=>response.json())
  }
   
   
   
   
  public getStudents() {              
    return fetch('http://localhost:3000/prijavljeni')
      .then(response=>response.json())
  }
      
      
      
      
      
  public getTeachers() {              
    return fetch('http://localhost:3000/nastavnici')
      .then(response=>response.json())
  }
      
   
   
  public getStudentByEmail(email) {
    return fetch(`http://localhost:3000/prijavljeni/?email=${email}`)
      .then( response => response.json());
  }
   
   
   
  public getCourseByName(ime) {
    return fetch(`http://localhost:3000/predmeti/?ime=${ime}`)
      .then( response => response.json());
   }
   
   
   
   
  public getSelected(id) {
    return fetch(`http://localhost:3000/predmeti/${id}`)
      .then(response => response.json())
   }
   
   
   
   
  public deleteStudent(id) {
    return fetch(`http://localhost:3000/prijavljeni/${id}`,{
      method:"DELETE"
      }).then(response => response.json());        
  }
   
   
   
  public updateCourse(id, data) {
    return fetch(`http://localhost:3000/predmeti/${id}`, {
      method: 'PUT',
      headers: {
          'Accept': 'application/json,text/plain',
          'Content-Type': 'application/json'
          },
   
      body: JSON.stringify(data)
    }).then(res => res.json())
      
  }
   
   
   
   
  public addStudent(data) {
    return fetch('http://localhost:3000/prijavljeni', {
      method: 'POST',
      headers: {
          'Accept': 'application/json,text/plain',
          'Content-Type': 'application/json'
          },
   
      body: JSON.stringify(data)
      }).then(res => res.json())
        
  }
  
  
  
  
  
  
}
