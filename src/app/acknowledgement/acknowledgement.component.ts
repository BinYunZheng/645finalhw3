
import { mergeAnalyzedFiles } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'acknowledgement',
  templateUrl: './acknowledgement.component.html',
  styleUrls: ['./acknowledgement.component.css']
})

export class AcknowledgementComponent implements OnInit{

  name: string = " ";
  
  constructor(public dataService: DataService) {}

  ngOnInit() {
    
    this.dataService.getStudentName().subscribe(studentName => {
      this.name = studentName; 
    } );

  }

  

}
