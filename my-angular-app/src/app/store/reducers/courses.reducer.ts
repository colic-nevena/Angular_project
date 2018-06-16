import { ActionReducer, Action } from '@ngrx/store';
import { Course } from "../../models/course";
import {LOAD_COURSES, LoadCourses, LOAD_COURSES_SUCCESS, LoadCoursesSuccess } from "../actions/index";




export default function (state: Course[] = [], action: Action) {
      switch(action.type) {
        
        case LOAD_COURSES_SUCCESS: {     
            console.log("uso u akciju SUCCESS")       
            const {courses} = action as LoadCoursesSuccess; 
            console.log(courses) 
            return courses;
           
        }
      
        default:
          return state;
      }
    
}