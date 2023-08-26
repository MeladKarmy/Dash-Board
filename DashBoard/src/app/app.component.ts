import { Component } from '@angular/core';
import { TransformDirService } from './services/transform-dir.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DashBoard';
  close:boolean=false
  constructor(public translate:TransformDirService){  }
  // ngOnInit(){
  //   this.translate.translater()
  //   this.translate.transformTo()
  // }
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
