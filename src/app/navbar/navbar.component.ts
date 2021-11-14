import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isIn = false;  //store state
  constructor() { }

  ngOnInit(): void {
  }

  //click handler
  toggleState() {
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }
  
}
