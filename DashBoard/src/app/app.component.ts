import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DashBoard';
  constructor(private translate:TranslateService){  }
langue:boolean=false
  translater()
  {
    if(this.langue==false){
      this.translate.use('ar')
      document.dir = 'rtl';
    } 
    else {
       this.translate.use('en')
       document.dir = 'ltr';
    }
  }
  transformTo()
  {
    this.langue=!this.langue
    this.translater()
  }
}
