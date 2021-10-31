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
import { gsap} from 'gsap';
import { FavoritesService } from 'src/app/services/favorites.service';

@Component({
  selector: 'app-alaus-list',
  templateUrl: './alaus-list.component.html',
  styleUrls: ['./alaus-list.component.scss']
})
export class AlausListComponent implements OnInit {
public tamsus:boolean=false;
public sviesus:boolean=false;
public visi:boolean=true;

  constructor(public alausService: AlausServiceService,public favoritesService:FavoritesService ) {}
  ngOnInit(): void {
    const listAnim = gsap.timeline({ defaults: { ease: "power1.out" } });
    listAnim.fromTo(".content", { opacity: 0 }, { opacity: 1, duration: 1 }, "3");
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

public rodytiTamsu():void {
  this.tamsus = true;
  this.sviesus = false;
  this.visi = false;
}

public rodytiSviesu():void {
  this.tamsus = false;
  this.sviesus = true;
  this.visi = false;
}

public rodytiVisus():void {
  this.tamsus = false;
  this.sviesus = false;
  this.visi = true;
}

  public addToFavorites(itemId: number, imageUrl:string) {
    // [] <--- Taip susikuria naujas masyvas
    // [...kitasMasyvas] <--- Taip į masyvą "pažeriami" kito masyvo elementai
    // [1, 2, 3]
    // [...kitasMasyvas, 1]
    this.favoritesService.favorites = [...this.favoritesService.favorites, itemId];
  }

    public removeFromFavorites(itemId: number) {
    const itemIndex = this.favoritesService.favorites.indexOf(itemId);

    if (itemIndex !== -1)
      this.favoritesService.favorites.splice(itemIndex, 1);

    this.favoritesService.favorites = [...this.favoritesService.favorites]; 
  }

}
