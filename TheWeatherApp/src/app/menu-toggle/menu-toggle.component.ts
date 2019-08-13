import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { WeatherService } from '../Core/Services/weather.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Weather } from '../Core/Models/weather';

@Component({
  selector: 'app-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  styleUrls: ['./menu-toggle.component.css']
})
export class MenuToggleComponent implements OnInit {

  showMenu: boolean = false;
  authenticateService: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
   }

  toggleMenu() {
    if ( this.showMenu === false) {
      return this.showMenu = true; }
    else {
      return this.showMenu = false;
    }
  }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
