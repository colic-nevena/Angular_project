import { Action } from "@ngrx/store";
import { Course } from "../../models/course";
import { SelectCourse, SELECT_COURSE} from "../actions/index";


export default function (state: Course = null, action: Action) {
    switch(action.type) {
        
        case SELECT_COURSE: {
            return (action as SelectCourse).course;
        }
        
             
        default:
        return state;
    }
}