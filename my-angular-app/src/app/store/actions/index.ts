import { Action } from "@ngrx/store";
import { Course } from "../../models/course";

export const UPDATE_COURSE = "Update course";//rating
export const SELECT_COURSE = "Select course";
export const LOAD_COURSES = "Load courses";
export const LOAD_COURSES_SUCCESS = "Load courses Success";
export const LOAD_COURSES_FAIL = "Load coursesFail";


export class LoadCourses implements Action {
    type = LOAD_COURSES;
}


export class LoadCoursesSuccess implements Action {
    type = LOAD_COURSES_SUCCESS;
    courses: Course[];    
    constructor(courses: Course[]){
        this.courses = {...courses}
    }
}


export class LoadCoursesFail implements Action {
    type = LOAD_COURSES_FAIL;
    constructor(public payload: any) {}
}

export class UpdateCourse implements Action {
    type = UPDATE_COURSE;
    course: Course;
    constructor(course: Course) {
        this.course = {...course};
    }
}

export class SelectCourse implements Action {
    type = SELECT_COURSE;
    constructor(public course:Course) { }
}