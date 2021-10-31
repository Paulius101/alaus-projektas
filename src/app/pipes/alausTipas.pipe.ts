import { Pipe, PipeTransform } from '@angular/core';
import { Alus } from '../model/alus';
@Pipe({
  name: 'alausTipas'
})
export class AlausTipasPipe implements PipeTransform {
// , unfiltered: any[]
  transform(value: any[], tipas?:string): any {  
    if (tipas==undefined)
 return value; 
const filtered = value.filter(beer => beer.attribute ===tipas)
    return filtered;
  }

}
