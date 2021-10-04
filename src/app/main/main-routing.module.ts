import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Movie detail Page
  {
    path: 'movie/:movieId',
    loadChildren: () =>
      import('./movie/movie.module').then((m) => m.MovieModule),
  },

  // Home Page
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
