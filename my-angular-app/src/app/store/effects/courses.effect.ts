  //ovde se slusa load courses akcija i pravi side effect
  import { Injectable } from "@angular/core";
  import { Effect, Actions } from "@ngrx/effects";
  import { switchMap, map } from "rxjs/operators";
  import * as fromServices from "../../services/school.service";
  import * as coursesActions from "../actions/index";
  
  
  
  @Injectable() 
  export class CoursesEffects {
    constructor(private actions$: Actions,
                private coursesService: fromServices.SchoolService) {}
          
  @Effect() 
    loadCourses$ = this.actions$.ofType(coursesActions.LOAD_COURSES)//ovo je observable stream, ovde hocemo side effect
        .pipe(
        switchMap(() => {            
            return this.coursesService.getCourses().pipe(
                map(courses => new coursesActions.LoadCoursesSuccess(courses))
                
            )        
        })
    )
      
  }
  