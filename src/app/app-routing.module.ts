import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlausListComponent } from './components/alaus-list/alaus-list.component';
import { FavoritesComponent } from './components/favorites/favorites.component';


const routes: Routes = [{
  path: 'items',
  component: AlausListComponent
},
{
  path:'favorites',
  component:FavoritesComponent
},
 {
    path: '',
    redirectTo: 'items',
    pathMatch: 'full'
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routesComponent  = [AlausListComponent, FavoritesComponent]