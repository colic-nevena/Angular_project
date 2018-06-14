import { Course } from "../models/course";
import {ActionReducerMap} from "@ngrx/store";
import coursesReducer from "./reducers/courses.reducer";
import selectedCourseReducer from "./reducers/selected-course.reducer";

export interface State {
    courses: Course[],
    selectedCourse: Course
}


export const rootReducer: ActionReducerMap<State> = {
    courses: coursesReducer,
    selectedCourse: selectedCourseReducer
}
