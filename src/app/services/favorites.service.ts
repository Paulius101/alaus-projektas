import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
 public favorites: any[] = [];
  constructor() { }
}
