import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { effects } from "./store";
import { EffectsModule } from '@ngrx/effects';

import { rootReducer } from "./store";
import { AppComponent } from './app.component';
import { SchoolService } from './services/school.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { UpisComponent } from './components/forms/upis/upis.component';
import { IspisComponent } from './components/forms/ispis/ispis.component';
import { CourseComponent } from './components/courses/course/course.component';
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';
import { TeacherComponent } from './components/teachers/teacher/teacher.component';
import { TeachersListComponent } from './components/teachers/teachers-list/teachers-list.component';


const appRoutes: Routes = [  
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'upis', 
    component: UpisComponent },
  { 
    path: 'ispis', 
    component: IspisComponent },
  {
    path: 'courses',
    component: CoursesListComponent
  },
  {
    path: 'teachers',
    component: TeachersListComponent
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];




@NgModule({
  declarations: [
    AppComponent,    
    NavbarComponent,
    HomeComponent,
    UpisComponent,
    IspisComponent,
    CourseComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    TeacherComponent,
    TeachersListComponent
  ],
  imports: [
    StoreModule.forRoot(rootReducer),
    BrowserModule, 
    HttpModule, 
    HttpClientModule,  
    FormsModule,
    RouterModule.forRoot(appRoutes),    
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({}) 
  ],
  providers: [
    SchoolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
