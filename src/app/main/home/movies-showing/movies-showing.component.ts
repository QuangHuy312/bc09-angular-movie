import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_core/services/movie.service';

@Component({
  selector: 'app-movies-showing',
  templateUrl: './movies-showing.component.html',
  styleUrls: ['./movies-showing.component.scss'],
})
export class MoviesShowingComponent implements OnInit {
  movies: any[] = [];
  constructor(private _movieService: MovieService) {}

  ngOnInit(): void {
    this._movieService.getMovieList().subscribe(
      (result) => {
        this.movies = result;
      },
      (error) => {
        console.log(error);
      },
      //complete , nếu lỗi thì k chạy , còn ko lỗi thì nó sẽ chạy sau khi result trả về
      () => {
        console.log(' call api success');
      }
    );
    console.log(this.movies);
  }
}
