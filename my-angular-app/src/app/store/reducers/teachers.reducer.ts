import { ActionReducer, Action } from '@ngrx/store';
import { Teacher } from "../../models/teacher";
import {LOAD_TEACHERS_SUCCESS, LoadTeachersSuccess } from "../actions/index";




export default function (state: Teacher[] = [], action: Action) {
      switch(action.type) {
        
        case LOAD_TEACHERS_SUCCESS: {           
            const {teachers} = action as LoadTeachersSuccess; 
            
            return teachers;
           
        }
      
        default:
          return state;
      }
    
}