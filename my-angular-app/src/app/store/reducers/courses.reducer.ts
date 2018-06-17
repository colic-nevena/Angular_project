import { ActionReducer, Action } from '@ngrx/store';
import { Course } from "../../models/course";
import {LOAD_COURSES_SUCCESS, LoadCoursesSuccess, SELECT_BY_DAY, SelectByDaySuccess, SELECT_BY_DAY_SUCCESS, SelectByDay } from "../actions/index";




export default function (state: Course[] = [], action: Action) {
      switch(action.type) {
        
        case LOAD_COURSES_SUCCESS: {    
            const {courses} = action as LoadCoursesSuccess; 
        
            return courses;
           
        }
        
       case SELECT_BY_DAY_SUCCESS: {
           
            const {courses, dan} = action as SelectByDaySuccess;
            
            console.log("saksessss")
            console.log(dan)
            
            const zaPrikaz = [];
            
            courses.forEach(kurs => {
            let tmp1 = kurs.dani.find(d => d === dan);          
            if (tmp1 !== undefined)
                zaPrikaz.push(kurs);
             });
          return zaPrikaz; 
          
        }
      
        default:
          return state;
      }
    
}