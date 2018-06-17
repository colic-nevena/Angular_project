import { Action } from "@ngrx/store";
import { Course } from "../../models/course";
import { Teacher } from "../../models/teacher";
import { Student } from "../../models/student";

export const SELECT_COURSE = "Select course";
export const LOAD_COURSES = "Load courses";
export const LOAD_COURSES_SUCCESS = "Load courses Success";
export const LOAD_TEACHERS = "Load teachers";
export const LOAD_TEACHERS_SUCCESS = "Load teachers Success";
export const SELECT_BY_DAY = "Select by day";
export const SELECT_BY_DAY_SUCCESS = "Select by day Success";
export const RATE_COURSE_REQ = "Rate course requested";



export class LoadCourses implements Action {    
    type = LOAD_COURSES;    
}



export class LoadCoursesSuccess implements Action {
    type = LOAD_COURSES_SUCCESS;
    courses: Course[];    
    constructor(courses: Course[]){
        this.courses = [...courses]
    }
}


export class LoadTeachers implements Action {    
    type = LOAD_TEACHERS;    
}



export class LoadTeachersSuccess implements Action {
    type = LOAD_TEACHERS_SUCCESS;
    teachers: Teacher[];    
    constructor(teachers: Teacher[]){
        this.teachers = [...teachers]
    }
}




export class SelectCourse implements Action {
    type = SELECT_COURSE;
    constructor(public course:Course) { }
}



export class SelectByDay implements Action {
    type = SELECT_BY_DAY;
    dan: string;
    constructor(dan: string) {        
        this.dan = dan;
    } 
}



export class SelectByDaySuccess implements Action {
    type = SELECT_BY_DAY_SUCCESS;
    courses: Course[];    
    dan: string;
    
    constructor(courses: Course[], dan: string){
        this.courses = [...courses];
        this.dan = dan;
        
    }
}



