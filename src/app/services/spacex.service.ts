import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpacexService {
  constructor(private http: HttpClient) {}

  private _rockets: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public rockets$: Observable<any[]> = this._rockets.asObservable();

  async load() {
    await this.http
      .get(environment.apiUrl + `/rockets`)
      .toPromise()
      .then((rockets: any) => {
        console.log({ rockets });
        this._rockets.next(rockets);
      })
      .catch((err) => console.log(err));
  }

  getRocket(rocketId: any) {
    return this.http.get(
      environment.apiUrl + `/rockets/` + rocketId
    ) as Observable<any>;
  }
}
