  import { Injectable } from "@angular/core";
  import { Effect, Actions } from "@ngrx/effects";
  import { switchMap, map } from "rxjs/operators";
  import * as fromServices from "../../services/school.service";
  import * as schoolActions from "../actions/index";
  
  
  
  @Injectable() 
  export class TeachersEffects {
    constructor(private actions$: Actions,
                private teachersService: fromServices.SchoolService) {}
          
  @Effect() 
    loadTeachers$ = this.actions$.ofType(schoolActions.LOAD_TEACHERS)
        .pipe(
        switchMap(() => {            
            return this.teachersService.getTeachers().pipe(
                map(teachers => new schoolActions.LoadTeachersSuccess(teachers))                
            )        
        })
    )
      
  }
  