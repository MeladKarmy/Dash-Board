import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DashBoard';
  textDir:any='ltr'
  constructor(private translate:TranslateService){  }
langue:boolean=false
  translater()
  {
    if(this.langue==false){
      this.translate.use('ar')
      document.dir = 'rtl';
      console.log(this.translate)
    } 
    else {
       this.translate.use('en')
       document.dir = 'ltr';
       console.log(this.translate)
       this.fun()

    }
  }
  transformTo()
  {
    this.langue=!this.langue
    this.translater()
    this.fun()
  }
  fun(){
    this.translate.onLangChange.subscribe((event: LangChangeEvent)=>{
      if(event.lang == 'ar')
      {
        this.textDir = 'rtl';
      } 
      else
      {
        this.textDir = 'ltr';
      }
    })
  }
}
