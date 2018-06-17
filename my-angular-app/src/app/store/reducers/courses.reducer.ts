import { ActionReducer, Action } from '@ngrx/store';
import { Course } from "../../models/course";
import {LOAD_COURSES_SUCCESS, LoadCoursesSuccess } from "../actions/index";




export default function (state: Course[] = [], action: Action) {
      switch(action.type) {
        
        case LOAD_COURSES_SUCCESS: {    
            const {courses} = action as LoadCoursesSuccess; 
        
            return courses;
           
        }
      
        default:
          return state;
      }
    
}