import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Showtimes } from 'src/app/_core/models/movie.model';
import { MovieService } from 'src/app/_core/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  activeTabs: string = 'detail';
  movie: any = [];
  showTimes: Showtimes[] = [];
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService
  ) {}

  ngOnInit(): void {
    const { movieId } = this._activatedRoute.snapshot.params;
    this._movieService.getMovieDetail(movieId).subscribe({
      next: (result) => {
        this.movie = result;
        this.showTimes = result.showTimes;
        console.log(this.movie);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
