import { Component } from '@angular/core';
import { SpacexService } from './services/spacex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'SpaceX Rockets';

  constructor(private _spacexService: SpacexService) {}

  ngOnInit(): void {
    this._spacexService.load();
  }
}
