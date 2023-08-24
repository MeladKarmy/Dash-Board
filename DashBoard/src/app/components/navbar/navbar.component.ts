import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(){}
  dropdown1:boolean=false;
  dropdown2:boolean=false;
  dropdownClicked1()
  {
    this.dropdown1=!this.dropdown1
  }
  dropdownClicked2()
  {
    this.dropdown2=!this.dropdown2
  }

}
