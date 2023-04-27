import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentProfileSettingComponent } from './student-profile-setting/student-profile-setting.component';
import { StudentHeaderComponent } from './student-header/student-header.component';

//Angular Material
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  { 
    path: 'student', component: StudentComponent,
    children: [
      { path: 'dashboard', component: StudentDashboardComponent },
      { path: 'profile-setting', component: StudentProfileSettingComponent }
    ]
  }
];

@NgModule({
  declarations: [
    StudentComponent,
    StudentDashboardComponent,
    StudentProfileSettingComponent,
    StudentHeaderComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule],
})
export class StudentModule { }
