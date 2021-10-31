import {
  Injectable
} from '@angular/core';
import {
  Alus
} from 'src/app/model/alus';
import {
  BeerDetails
} from '../model/beer-details';
@Injectable({
  providedIn: 'root'
})
export class AlausServiceService {
  public bearList: Alus[] = [];
  private _beerDetails: BeerDetails = new BeerDetails();


  constructor() {
    // const beerDetailsFromStorage = localStorage.getItem("beerDetails");

    // if (beerDetailsFromStorage)
    //   this._beerDetails = JSON.parse(beerDetailsFromStorage);


    this.bearList.push(new Alus(1, 'tamsus','Quilmes Argentina beer', 'Nu sitas sako tikrai skanus', 'https://www.nicepng.com/png/detail/239-2397885_cerveza-quilmes-argentina-argentina-beer.png', ['traskuciais', ' picke', ' kebabiukais'], 0.049, 1))
    this.bearList.push(new Alus(2, 'sviesus', 'Rugštelė', 'Net nebandyciau', 'https://www.ikea.com/cz/en/images/products/oel-ljus-lager-lager-beer-4-7-__0155889_pe313998_s5.jpg', ['druska', ' skanesniu alum'], 0.047, 14))
    this.bearList.push(new Alus(3, 'sviesus', 'Zigulinis', 'Nebent nusprogt ar apakt', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/%C5%BDiguli_beer.JPG/1200px-%C5%BDiguli_beer.JPG', ['metanoliu'], 0.044, 0))
    console.log(this.bearList);
  }
  // public printBeerDetails(): void {
  //   console.log(this._beerDetails);
  // }

  // public getBeerDetails(): BeerDetails {
  //   return this._beerDetails;
  // }

  // public setBeerDetails(newBeerDetails: BeerDetails) {
  //   localStorage.setItem("userDetails", JSON.stringify(newBeerDetails));
  //   this._beerDetails = newBeerDetails;
  }


