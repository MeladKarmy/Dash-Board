import { Component, HostListener } from '@angular/core';
import { TransformDirService } from './services/transform-dir.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'DashBoard';
  constructor(public translate:TransformDirService){  }
  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
  }
  public getScreenWidth: any;
  close:boolean=false
  langue:boolean=false
  
  ngAfterContentChecked()
  {
    this.getScreenWidth = window.innerWidth;
  }
  openNav()
  {
    this.close=!this.close
  }
}
