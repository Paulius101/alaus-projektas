import { Pipe, PipeTransform } from '@angular/core';
import { Alus } from '../model/alus';

@Pipe({
  name: 'idToDescription'
})
export class IdToDescriptionPipe implements PipeTransform {

 transform(itemId: number, items: Alus[]): string {
    const item = items.find((item) => item.id === itemId);

    return item?.description || "";
  }

}
