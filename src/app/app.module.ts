import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlausListComponent } from './components/alaus-list/alaus-list.component';
import { AlusItemComponent } from './components/alus-item/alus-item.component';
import { OpeningEffectComponent } from './components/opening-effect/opening-effect.component';

@NgModule({
  declarations: [
    AppComponent,
    AlausListComponent,
    AlusItemComponent,
    OpeningEffectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CarouselModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
