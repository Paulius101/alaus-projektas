import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
 public favorites: any[] = [];
  constructor() { }

  public addToFavorites(itemId: number) {
    this.favorites = [...this.favorites, itemId];
  }

 public removeFromFavorites(itemId: number) {
    const itemIndex = this.favorites.indexOf(itemId);

    if (itemIndex !== -1)
      this.favorites.splice(itemIndex, 1);

    this.favorites = [...this.favorites]; 
  }
}
