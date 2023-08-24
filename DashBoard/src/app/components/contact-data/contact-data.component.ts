import { Component  } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.css']
})
export class ContactDataComponent {
  openChoice:boolean=false
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  data = [
    {id:"ID-15877",name:"اسم إفتراضي جديدي",email:"Example@company.com",days:"jjhghj",file:"../../../assets/image/tablefile2.svg"},
    {id:"ID-15877",name:"اسم إفتراضي جديدي",email:"Example@company.com",days:"jjhghj",file:"../../../assets/image/tablefile.svg"},
    {id:"ID-15877",name:"اسم إفتراضي جديدي",email:"Example@company.com",days:"jjhghj",file:"../../../assets/image/tablefile2.svg"},
    {id:"ID-15877",name:"اسم إفتراضي جديدي",email:"Example@company.com",days:"jjhghj",file:"../../../assets/image/tablefile.svg"},
    {id:"ID-15877",name:"اسم إفتراضي جديدي",email:"Example@company.com",days:"jjhghj",file:"../../../assets/image/tablefile.svg"},
    {id:"ID-15877",name:"اسم إفتراضي جديدي",email:"Example@company.com",days:"jjhghj",file:"../../../assets/image/tablefile2.svg"},
    {id:"ID-15877",name:"اسم إفتراضي جديدي",email:"Example@company.com",days:"jjhghj",file:"../../../assets/image/tablefile.svg"},
    {id:"ID-15877",name:"اسم إفتراضي جديدي",email:"Example@company.com",days:"jjhghj",file:"../../../assets/image/tablefile2.svg"},
    
  ];
  drop(event: CdkDragDrop<{}[]>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }

  opecClicked(){
    this.openChoice=!this.openChoice
  }
}
