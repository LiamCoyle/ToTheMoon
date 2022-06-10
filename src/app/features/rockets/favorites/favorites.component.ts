import { Component, Input, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';
import { SpacexService } from 'src/app/services/spacex.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  constructor(private _favoriteService: FavoriteService) {}

  get favoritesFromService$() {
    return this._favoriteService.favorites$;
  }

  ngOnInit(): void {}
}
