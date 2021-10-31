import { Pipe, PipeTransform } from '@angular/core';
import { Alus } from '../model/alus';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: Alus[], orderBy?: string): any {
    if (orderBy==undefined) return value;
    if (orderBy=="name"){
      value.sort((a:Alus,b:Alus)=>{
        return a.name.localeCompare(b.name);
      });
      return value;
    }
     if (orderBy=="abv"){
      value.sort((a:Alus,b:Alus)=>{
        return a.abv-b.abv;
      });
      return value;
    }

  }
}
