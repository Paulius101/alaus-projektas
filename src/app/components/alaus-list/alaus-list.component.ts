import {
  Component,
  OnInit
} from '@angular/core';
import {
  Alus
} from 'src/app/model/alus';
import {
  AlausServiceService
} from 'src/app/services/alaus-service.service';
import {
  OwlOptions
} from 'ngx-owl-carousel-o';
import {
  gsap
} from 'gsap';
import {
  FavoritesService
} from 'src/app/services/favorites.service';

@Component({
  selector: 'app-alaus-list',
  templateUrl: './alaus-list.component.html',
  styleUrls: ['./alaus-list.component.scss']
})

export class AlausListComponent implements OnInit {
public tipas?:string;
public order?:string
  public tamsus: boolean = false;
  public sviesus: boolean = false;
  public visi: boolean = true;
  public beerList ? : Alus[]
  constructor(public alausService: AlausServiceService, public favoritesService: FavoritesService) {}
  ngOnInit(): void {
    const listAnim = gsap.timeline({
      defaults: {
        ease: "power1.out"
      }
    });
    listAnim.fromTo(".content", {
      opacity: 0
    }, {
      opacity: 1,
      duration: 1
    }, "3");
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

  public rodytiTamsu(): void {
    this.tipas = 'tamsus'
  }

  public rodytiSviesu(): void {
   this.tipas = 'sviesus'
  }

  public rodytiVisus(): void {
  this.tipas = undefined
  }


  public pagalph () :void {
    this.order = 'abv'
  }
  // public pagalph() {
  //   this.beerList ? .sort((a, b) => {

  //     return a.abv - b.abv;
  //   })
  // }

  public addToFavorites(itemId: number) {
    this.favoritesService.favorites = [...this.favoritesService.favorites, itemId];
  }

  public removeFromFavorites(itemId: number) {
    const itemIndex = this.favoritesService.favorites.indexOf(itemId);

    if (itemIndex !== -1)
      this.favoritesService.favorites.splice(itemIndex, 1);

    this.favoritesService.favorites = [...this.favoritesService.favorites];
  }

}
