import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SpacexService } from 'src/app/services/spacex.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  rocketId!: string;
  rocket$!: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private _spacexService: SpacexService
  ) {}

  ngOnInit(): void {
    this.rocket$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.rocketId = String(params.get('id'));
        return this._spacexService.getRocket(this.rocketId);
      })
    );
  }
}
