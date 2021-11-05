import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule, routesComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlausListComponent } from './components/alaus-list/alaus-list.component';
import { AlusItemComponent } from './components/alus-item/alus-item.component';
import { OpeningEffectComponent } from './components/opening-effect/opening-effect.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavortiesNormalizedPipe } from './pipes/favorties-normalized.pipe';
import { IdToNamePipe } from './pipes/id-to-name.pipe';
import { IdToImagePipe } from './pipes/id-to-image.pipe';
import { DeadEndComponent } from './components/dead-end/dead-end.component';
import { OrderPipe } from './pipes/order.pipe';
import { AlausTipasPipe } from './pipes/alausTipas.pipe';
import { IdToDescriptionPipe } from './pipes/id-to-description.pipe';
import { MessagesComponent } from './components/messages/messages.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AlausListComponent,
    AlusItemComponent,
    OpeningEffectComponent,
    FavoritesComponent,
    FavortiesNormalizedPipe,
    IdToNamePipe,
    IdToImagePipe,
    DeadEndComponent,
    routesComponent,
    OrderPipe,
    AlausTipasPipe,
    IdToDescriptionPipe,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CarouselModule, 
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }