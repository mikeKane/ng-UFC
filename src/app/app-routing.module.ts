import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FightersComponent } from './fighters/fighters.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '', //When app loads
    component: FightersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
