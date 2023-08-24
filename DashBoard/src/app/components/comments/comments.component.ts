import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  comments = [
    {comment:"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي",name:"ميرا" ,image:"../../../assets/image/avatar1.svg"},
    {comment:"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي",name:"محمود الغريب" ,image:"../../../assets/image/avatar2.svg"},
    {comment:"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي",name:"كريم عبد العزيز" ,image:"../../../assets/image/avatar2.svg"},
    {comment:"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي",name:"ميرا" ,image:"../../../assets/image/avatar1.svg"},
    {comment:"هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوي",name:"ميرا",image:"../../../assets/image/avatar1.svg"},
  ];

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.comments, event.previousIndex, event.currentIndex);
  }
}
