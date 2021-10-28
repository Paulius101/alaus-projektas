import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlausListComponent } from './components/alaus-list/alaus-list.component';
import { AlusItemComponent } from './components/alus-item/alus-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AlausListComponent,
    AlusItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
