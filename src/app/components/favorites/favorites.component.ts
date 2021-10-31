import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { AlausServiceService } from 'src/app/services/alaus-service.service';
import {
  OwlOptions
} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor(public favoritesService:FavoritesService, public alusService:AlausServiceService) { }

  ngOnInit(): void {
  }
 customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      940: {
        items: 1
      },
   
    },
    nav: true
  }

  public removeFromFavorites(itemId: number) {
    const itemIndex = this.favoritesService.favorites.indexOf(itemId);

    if (itemIndex !== -1)
      this.favoritesService.favorites.splice(itemIndex, 1);

    this.favoritesService.favorites = [...this.favoritesService.favorites]; 
  }
}
