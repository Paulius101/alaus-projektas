import { Pipe, PipeTransform } from '@angular/core';
import { Alus } from '../model/alus';
@Pipe({
  name: 'sviesusAlus'
})
export class SviesusAlusPipe implements PipeTransform {

  transform(value: any, unfiltered: any[]): any {
const filtered = unfiltered.filter(beer => beer.attribute === 'sviesus')
    return filtered;
  }

}
