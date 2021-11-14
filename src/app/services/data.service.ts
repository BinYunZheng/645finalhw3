
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private studentName = new BehaviorSubject<string>('');
  

  constructor() { }

  setStudentName (name: string) {
    this.studentName.next(name);
  }

  getStudentName() {
    return this.studentName.asObservable();
  }
  

}
