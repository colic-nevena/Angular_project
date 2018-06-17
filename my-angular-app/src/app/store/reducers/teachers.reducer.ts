import { Action } from '@ngrx/store';
import { Teacher } from "../../models/teacher";
import { LOAD_TEACHERS_SUCCESS, LoadTeachersSuccess } from "../actions/index";
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';


export interface TeachersState extends EntityState<Teacher> {
    ids: number[];
    entities: {[id:number] : Teacher}
};
const adapter: EntityAdapter<Teacher> = createEntityAdapter<Teacher>();


const initialState = {
    ids: [],
    entities: { }
}


export default function (state: TeachersState = initialState, action: Action) {
      switch(action.type) {        
        case LOAD_TEACHERS_SUCCESS: {           
            const {teachers} = action as LoadTeachersSuccess;             
            
            const ids = [];
            
            teachers.forEach((teach, index) => {
                ids.push(index);
            })
            
            return {
                ids,
                entities: {...teachers}
            }          
            
        }      
        default:
          return state;
      }    
}
export const selectors = adapter.getSelectors();