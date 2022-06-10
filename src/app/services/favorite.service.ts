import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private _favorites: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public favorites$: Observable<any[]> = this._favorites.asObservable();

  constructor() {}

  update(favorites: any[]) {
    this._favorites.next(favorites);
  }
}
