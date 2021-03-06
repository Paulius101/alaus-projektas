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
  public tipas ? : string;
  public order ? : string
  constructor(public alausService: AlausServiceService, public favoritesService: FavoritesService) {}
  ngOnInit(): void {
    this.alausService.getItems();
    
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


  public rodytiTamsu(): void {
    this.tipas = 'tamsus'
  }

  public rodytiSviesu(): void {
    this.tipas = 'sviesus'
  }

  public rodytiVisus(): void {
    this.tipas = undefined
  }


  public pagalAlk(): void {
    this.order = 'abv'
  }

  public pagalPavadinima():void {
    this.order = 'name'
  }

}
