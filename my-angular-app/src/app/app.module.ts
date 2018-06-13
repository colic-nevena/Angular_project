import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SchoolService } from './services/school.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { UpisComponent } from './components/FormsComponent/upis/upis.component';
import { IspisComponent } from './components/FormsComponent/ispis/ispis.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TeachersComponent } from './components/teachers/teachers.component';


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
    component: CoursesComponent
  },
  {
    path: 'teachers',
    component: TeachersComponent
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
    CoursesComponent,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)    
  ],
  providers: [
    SchoolService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
