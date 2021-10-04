import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking/booking.component';
import { CoverComponent } from './cover/cover.component';
import { DetailComponent } from './detail/detail.component';
import { MovieComponent } from './movie.component';
import { ReviewComponent } from './review/review.component';
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
  declarations: [
    BookingComponent,
    CoverComponent,
    DetailComponent,
    MovieComponent,
    ReviewComponent,
  ],
  imports: [CommonModule, MovieRoutingModule],
})
export class MovieModule {}
