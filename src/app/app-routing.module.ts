import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'rockets', pathMatch: 'prefix' },
  {
    path: 'rockets',
    loadChildren: () =>
      import('./features/rockets/rockets.module').then((m) => m.RocketsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
