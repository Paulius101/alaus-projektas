import {
  Pipe,
  PipeTransform
} from '@angular/core';
import {
  FavoritesMap
} from '../model/favorites-map';

@Pipe({
  name: 'favortiesNormalized'
})
export class FavortiesNormalizedPipe implements PipeTransform {

  transform(favorites: any[]): FavoritesMap[] {
    const favoritesNorm: FavoritesMap[] = [];
    favorites.forEach((itemId: number) => {
      const hasItemMapped = favoritesNorm.some((mapping) => mapping.itemId === itemId)

      if (hasItemMapped)
        return;

      const items = favorites.filter((i) => i === itemId);

      const mapping: FavoritesMap = {
        itemId: itemId,
      }

      favoritesNorm.push(mapping)
    })
    return favoritesNorm
  }
}
