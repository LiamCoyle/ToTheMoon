import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketsComponent } from './rockets.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { RocketsRoutingModule } from './rockets-routing.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { TableComponent } from './shared/table/table.component';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [RocketsComponent, ListComponent, DetailComponent, FavoritesComponent, TableComponent, CardComponent],
  imports: [CommonModule, RocketsRoutingModule],
})
export class RocketsModule {}
