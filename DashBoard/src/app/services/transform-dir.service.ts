import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TransformDirService {

constructor(private translate:TranslateService){  }
langue:boolean=false
textDir:any='rtl'

translater()
  {
    if(this.langue==false){
      this.translate.use('ar')
    } 
    else {
       this.translate.use('en')
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
