import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FavoriteService } from 'src/app/services/favorite.service';
import { SpacexService } from 'src/app/services/spacex.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(
    private _spacexService: SpacexService,
    private _favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {}

  get favoritesFromService$() {
    return this._favoriteService.favorites$;
  }

  get rocketsFromService$() {
    return this._spacexService.rockets$;
  }
}
