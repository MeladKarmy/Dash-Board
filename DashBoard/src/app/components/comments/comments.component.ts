import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { TransformDirService } from 'src/app/services/transform-dir.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  constructor(public translate:TransformDirService){}
  hover='../../../assets/image/clock1.svg'

  comments = [
    {comment:"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي",name:"ميرا محسن" ,image:"../../../assets/image/avatar1.svg",clock:"../../../assets/image/clock1.svg"},
    {comment:"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي",name:"محمود الغريب" ,image:"../../../assets/image/avatar2.svg",clock:"../../../assets/image/clock1.svg"},
    {comment:"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي",name:"كريم عبد العزيز" ,image:"../../../assets/image/avatar2.svg",clock:"../../../assets/image/clock1.svg"},
    {comment:"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي",name:"ميرا محسن" ,image:"../../../assets/image/avatar1.svg",clock:"../../../assets/image/clock1.svg"},
    {comment:"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي",name:"ميرا محسن",image:"../../../assets/image/avatar1.svg",clock:"../../../assets/image/clock1.svg"},
    {comment:"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي",name:"محمود الغريب" ,image:"../../../assets/image/avatar2.svg",clock:"../../../assets/image/clock1.svg"},
    {comment:"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي",name:"كريم عبد العزيز" ,image:"../../../assets/image/avatar2.svg",clock:"../../../assets/image/clock1.svg"},
  ];

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.comments, event.previousIndex, event.currentIndex);
  }
  mouseOn(i:number){
   this.comments[i].clock='../../../assets/image/clock.svg'
  }
  mouseOut(i:number){
    this.comments[i].clock='../../../assets/image/clock1.svg'
  }
}
