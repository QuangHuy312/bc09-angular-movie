import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CoverComponent } from './cover/cover.component';
import { DetailComponent } from './detail/detail.component';
import { MovieComponent } from './movie.component';

const routes: Routes = [
  { path: 'detail', component: DetailComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'cover', component: CoverComponent },
  { path: '', component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRoutingModule {}
