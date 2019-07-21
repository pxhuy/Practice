import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showMenu: boolean = false;
  constructor() { }
  toggleMenu() {
    if ( this.showMenu === false) { return this.showMenu = true }
    else return this.showMenu = false;
  }

  ngOnInit() {
  }

}
