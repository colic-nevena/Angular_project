import { Action } from "@ngrx/store";
import { Course } from "../../models/course";

export const UPDATE_COURSE = "Update course";//rating
export const SELECT_COURSE = "Select course";

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