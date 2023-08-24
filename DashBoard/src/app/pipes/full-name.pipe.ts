import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(fullName: string): string {
    let name:string=''
    if(fullName.length>20) 
    {
      for(let i=0;i<fullName.length;i++)
      {
        name+=fullName[i]
      }
      return name+"..."
    }
    return fullName
  }

}
