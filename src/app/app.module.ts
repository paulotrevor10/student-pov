import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { StudentModule } from './student/student.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CapstoneTitlesComponent } from './capstone-titles/capstone-titles.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    CapstoneTitlesComponent
  ],
  imports: [
    BrowserModule,
    StudentModule,
    RouterModule.forRoot([
      {path: '',component: SigninComponent }
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
