import { Component  } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TransformDirService } from 'src/app/services/transform-dir.service';


@Component({
  selector: 'app-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.css']
})
export class ContactDataComponent {
  constructor(public translate:TransformDirService){}
  openChoice:boolean=false
  id:boolean=true
  name:boolean=true
  email:boolean=true
  file:boolean=true
  days:boolean=true
  
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
  show(value:any)
  {
    let italitor=[this.id,this.file,this.name,this.email,this.days]
    italitor.filter((x:any)=>{
      if(x===value)return x
    })
    italitor[0]=!italitor[0]
  }
}
