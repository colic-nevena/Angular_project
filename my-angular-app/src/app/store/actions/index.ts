import { Action } from "@ngrx/store";
import { Course } from "../../models/course";

export const SELECT_COURSE = "Select course";
export const LOAD_COURSES = "Load courses";
export const LOAD_COURSES_SUCCESS = "Load courses Success";



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



export class SelectCourse implements Action {
    type = SELECT_COURSE;
    constructor(public course:Course) { }
}