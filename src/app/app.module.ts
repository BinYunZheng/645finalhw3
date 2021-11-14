import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { AllSurveysComponent } from './all-surveys/all-surveys.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DataService } from './services/data.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SurveyService } from './services/survey.service';



@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    AcknowledgementComponent,
    AllSurveysComponent,
    NavbarComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    RouterModule.forRoot( [
      {
        path: '', 
        component: HomepageComponent},
      {
        path: 'newsurvey', 
        component: StudentFormComponent},
      {
        path: 'allsurveys', 
        component: AllSurveysComponent}
    ])
  ],
  providers: [DataService, SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
