import { DataService} from '../services/data.service';
import { ThrowStmt } from '@angular/compiler';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Student, Like } from '../student';
import { SurveyService} from '../services/survey.service';
import { ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})

export class StudentFormComponent {
  
  constructor(public dataService: DataService, private router: Router, private _surveyService: SurveyService) {}

  public errorMessage: any;
  surveyDate = new Date();
   
  recommend: string[] = ['Very Likely',
                          'Likely',
                          'Unlikely'    ];

  interests: string[] = [ 'Friends',
                          'Television',
                          'Internet',
                          'Other'        ];
  
  likes: Like[] = [     {id: 1, name: 'Students', checked: false},
                        {id: 2, name: 'Campus', checked: false},
                        {id: 3, name: 'Location', checked: false},
                        {id: 4, name: 'Atomsphere', checked: false},
                        {id: 5, name: 'DormRooms', checked: false},
                        {id: 6, name: 'Sports', checked: false}        ];
  

  model: Student = new Student();
  @ViewChild('studentForm') form: any;
 
  addSurvey(student: Student): void {
    this._surveyService.addStudent(student)
      .subscribe(data => console.log("new survey added:", JSON.stringify(data)),
                 error => this.errorMessage = error)
  }

  onSubmit() {
      console.log("Form submitted!");
      //store the checkbox values checked
      var result = this.likes.filter(x=>x.checked).map(x=>x.name);
      result.forEach(element => {this.model.like.push(element)});

      //convert Date to String 
      this.model.date = this.surveyDate.toDateString();
    
      // pass student name and redirect to Acknlowledgement component    
      var studentName: string = this.model.fname + " " + this.model.lname;
      this.dataService.setStudentName(studentName);
      this.router.navigateByUrl('/acknowledgement');

      //pass survey data to backend
      this.addSurvey(this.model);
      //this.addSurvey();

      this.form.reset();
  }
;
}
