import { Action } from "@ngrx/store";
import { Course } from "../../models/course";
import { SelectCourse, SELECT_COURSE, UpdateCourse, UPDATE_COURSE} from "../actions/index";


export default function (state: Course = null, action: Action) {
    switch(action.type) {
        
        case SELECT_COURSE: {
            return (action as SelectCourse).course;
        }
        
        case UPDATE_COURSE: {
            const {course} = action as UpdateCourse;
            //ovde bi trebalo baza da se pozove da updatuje rating kursu
            return state && course.id === state.id ? course : state;
        }
        
        default:
        return state;
    }
}