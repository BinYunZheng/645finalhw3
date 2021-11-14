import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { SurveyService} from '../services/survey.service';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-all-surveys',
  templateUrl: './all-surveys.component.html',
  styleUrls: ['./all-surveys.component.css']
})
export class AllSurveysComponent implements OnInit {

  public surveys: Survey[] = [];
  public errorMessage: any;

  constructor(private _surveyService: SurveyService) { }

  ngOnInit() {
    this.getSurveys();
  }

  getSurveys(): void {
    this._surveyService.getSurveys()
      .subscribe(data => this.surveys = data,
                 error => this.errorMessage = error);
  }

}
