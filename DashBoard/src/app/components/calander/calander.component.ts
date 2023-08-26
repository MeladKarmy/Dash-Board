import { Component } from '@angular/core';
import { TransformDirService } from 'src/app/services/transform-dir.service';

@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.css']
})
export class CalanderComponent {
  constructor(public translate:TransformDirService){}
  nextArrow='../../../assets/image/next.svg'
  previousArrow='../../../assets/image/previous.svg'

}
