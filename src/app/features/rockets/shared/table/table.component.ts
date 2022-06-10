import { Component, Input, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() rockets: any[] | null = [];
  @Input() favorites: any[] | null = [];

  constructor(private _favoriteService: FavoriteService) {}

  ngOnInit(): void {}

  toggleFavorite(rocket: any): void {
    if (!this.isFavorite(rocket)) {
      this.favorites?.push(rocket);
    } else {
      const index = this.favorites!.indexOf(rocket, 0);
      if (index > -1) {
        this.favorites?.splice(index, 1);
      }
    }
    this._favoriteService.update(this.favorites!);
  }

  isFavorite(rocket: any): boolean {
    return this.favorites?.find((r) => r.id == rocket.id) === undefined
      ? false
      : true;
  }

  orderByIdAsc() {
    this.rockets?.sort((r1, r2) => {
      return r1.id - r2.id;
    });
  }

  orderByIdDesc() {
    this.rockets?.sort((r1, r2) => {
      return r2.id - r1.id;
    });
  }

  orderByNameDesc() {
    this.rockets?.sort((r1, r2) => {
      return r1.rocket_name < r2.rocket_name ? -1 : 0;
    });
  }
}
