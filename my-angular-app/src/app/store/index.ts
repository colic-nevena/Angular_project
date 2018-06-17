import { Course } from "../models/course";
import {ActionReducerMap} from "@ngrx/store";
import coursesReducer from "./reducers/courses.reducer";
import teachersReducer from "./reducers/teachers.reducer";
import selectedCourseReducer from "./reducers/selected-course.reducer";
import { Teacher } from "../models/teacher";
export * from "./effects";

export interface State {
    courses: Course[],
    teachers: Teacher[],
    selectedCourse: Course
}


export const rootReducer: ActionReducerMap<State> = {
    courses: coursesReducer,
    teachers: teachersReducer,
    selectedCourse: selectedCourseReducer
}

