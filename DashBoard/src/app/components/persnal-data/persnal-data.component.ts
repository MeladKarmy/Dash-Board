import { Component } from '@angular/core';
import { TransformDirService } from 'src/app/services/transform-dir.service';

@Component({
  selector: 'app-persnal-data',
  templateUrl: './persnal-data.component.html',
  styleUrls: ['./persnal-data.component.css']
})
export class PersnalDataComponent {
  constructor(public translate:TransformDirService){}
  x=this.translate.langue

}
