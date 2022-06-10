import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ListComponent } from './list/list.component';
import { RocketsComponent } from './rockets.component';

const routes: Routes = [
  {
    path: '',
    component: RocketsComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'prefix' },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
      },
      {
        path: 'favorites',
        component: FavoritesComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RocketsRoutingModule {}
