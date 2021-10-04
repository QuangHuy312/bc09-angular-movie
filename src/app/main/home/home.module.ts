import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './banner/banner.component';
import { CinemaComponent } from './cinema/cinema.component';
import { NewsComponent } from './news/news.component';
import { MoviesShowingComponent } from './movies-showing/movies-showing.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    BannerComponent,
    CinemaComponent,
    NewsComponent,
    MoviesShowingComponent,
    HomeComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
