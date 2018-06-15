import { Action } from "@ngrx/store";
import { Course } from "../../models/course";
import { SchoolService } from "../../services/school.service";
import {LOAD_COURSES, LoadCourses, LOAD_COURSES_SUCCESS, LoadCoursesSuccess, LoadCoursesFail, LOAD_COURSES_FAIL} from "../actions/index";

//ovde mislim da treba da se pozove baza da vrati sve kurseve, to je initial state
const initialState: Course[] = [];





export default function (state: Course[] = initialState, action: Action) {
      switch(action.type){
        case LOAD_COURSES: {
            return {...state, loading: true}
        }
        case LOAD_COURSES_SUCCESS: {              
              return {...state, loading: false, loaded: true}
        }
        case LOAD_COURSES_FAIL: {
              return {...state, loading: false, loaded: false}
        }
        default:
          return state;
      }
    
}