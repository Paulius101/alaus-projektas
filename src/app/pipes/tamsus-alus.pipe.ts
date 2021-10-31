import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tamsusAlus'
})
export class TamsusAlusPipe implements PipeTransform {

  transform(value: any, unfiltered: any[]): any {
const filtered = unfiltered.filter(beer => beer.attribute === 'tamsus')
    return filtered;
  }
}
