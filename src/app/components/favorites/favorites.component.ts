import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { AlausServiceService } from 'src/app/services/alaus-service.service';
import {
  OwlOptions
} from 'ngx-owl-carousel-o';
import { MessagesService } from 'src/app/services/messages.service';
import { NotificationType } from 'src/app/model/notification';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
public description:boolean=false;
public favoriteCard:boolean=true;
  constructor(public favoritesService:FavoritesService, public alusService:AlausServiceService, private messagesService:MessagesService) { }

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

public showDetails():any {
  this.description = true;
  this.favoriteCard = false;
}

public hideDetails():any {
   this.description = false;
  this.favoriteCard = true;
}

  public postMessageForRemovedFavorite():void {
 this.messagesService.postMessage({
  message: "Alus pašalintas iš mėgstamiausių sąrašo!",
  type: NotificationType.Error
})
  }
}
