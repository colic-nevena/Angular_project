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
          brojGlasova: kurs[0].rating,
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
  
  
  
  
  
  
  deleteStudent(student: Student) : void {    
   
    const mejl = student.email; 
    
    this.http.get<Student>(`http://localhost:3000/prijavljeni/?email=${mejl}`).subscribe(
    student => {
        
    this.http.delete(`http://localhost:3000/prijavljeni/${student[0].id}`).subscribe(response => response); 
          
           
    this.http.get<Course>(`http://localhost:3000/predmeti/?ime=${student[0].kurs}`).subscribe(
      kurs => {              
        
      const novi = {
        id: kurs[0].id,
        ime: kurs[0].ime,
        rating: kurs[0].rating,
        brojGlasova: kurs[0].brojGlasova,
        mesta_na_kursu: ++kurs[0].mesta_na_kursu,
        science: kurs[0].science,
        zabrana_rez: false,
        dani: kurs[0].dani,
        sati: kurs[0].sati
      };
             
    this.http.put(`http://localhost:3000/predmeti/${kurs[0].id}`, novi).subscribe(response => response);
     
  })  
          
          
          
  
}); 
   
 
}


  updateTeacher(teacher: Teacher) {
    console.log(teacher)
    this.http.get<Teacher>(`http://localhost:3000/nastavnici/${teacher.id}`).subscribe(
      teach => { 
 
      
      const rejt = (teach.rating+0.1 < 5) ? teach.rating+0.1 : 5;     
        
      const novi = {
        id: teach.id,
        licno_ime: teach.licno_ime,
        rating: rejt,
        kursevi:teach.kursevi,
        dani: teach.dani,
        sati: teach.sati
      };
             
    this.http.put(`http://localhost:3000/nastavnici/${teach.id}`, novi).subscribe(response => response);
     
  })  
  
  }







}
