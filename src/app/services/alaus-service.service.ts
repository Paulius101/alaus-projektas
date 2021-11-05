import {
  Injectable
} from '@angular/core';
import {
  Alus
} from 'src/app/model/alus';
import {
  BeerDetails
} from '../model/beer-details';
import {HttpClient} from "@angular/common/http";
import {MessagesService} from "./messages.service";
import {NotificationType} from "../model/notification";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AlausServiceService {
  public beerList: Alus[] = [];


  constructor(public http: HttpClient, private messageService: MessagesService) {
  }


  public getItems(): void {
    const request = this.http.get("https://api.punkapi.com/v2/beers?page=1&per_page=30");

    request.subscribe((response: any) => {
      console.log("Get items response:", response);
     this.beerList = response; 
    });
  }

  }


