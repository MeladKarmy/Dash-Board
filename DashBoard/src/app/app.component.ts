import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { TransformDirService } from './services/transform-dir.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DashBoard';
  constructor(public translate:TransformDirService){  }
langue:boolean=false
  translater()
  {
    this.translate.translater()
  }
  transformTo()
  {
   this.translate.transformTo()
  }
}
