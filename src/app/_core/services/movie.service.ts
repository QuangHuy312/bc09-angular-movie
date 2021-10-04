// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Movie, MovieDetail, Showtimes } from '../models/movie.model';
import { ApiService } from './api.service';

@Injectable({
  // providedIn: 'root': Khi khai báo cái này ta không cần import service vào AppModule và khai báo trong mảng providers
  providedIn: 'root',
})
export class MovieService {
  constructor(
    // private _http: HttpClient
    private _api: ApiService
  ) {}

  getMovieList(): Observable<Movie[]> {
    // Gọi API lấy danh sách phim
    // get() là 1 generic function, nghĩa là ta sẽ khai báo kiểu dữ liệu trả về của hàm tại thời điểm gọi hàm
    return (
      this._api
        .get<Movie[]>('QuanLyPhim/LayDanhSachPhim?maNhom=GP01')
        // pipe: nhận được kết quả từ observable trước khi trả ra cho subscribe
        .pipe(
          // Lấy kết quả của observable ra nếu thành công
          tap((result) => {
            // Có thể thực hiện 1 số logic với kết quả trả về
            console.log(result);
          }),

          // Nếu muốn thay đổi kết quả trả ra cho subscribe thì ta có thể viết trong hàm map
          // map((result) => {
          //   console.log(result)
          //   return result.map((item) => ({ ...item, danhGia: 0 }));
          // }),

          // Lấy ra lỗi của observable nếu thất bại
          catchError((error) => {
            console.log(error);

            return throwError(error);
          })
        )
    );
  }

  getMovieDetail(
    movieId: string
  ): Observable<{ showTimes: Showtimes[]; movie: Movie }> {
    // const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`;
    // return this._http.get(url);

    const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim`;
    return this._api
      .get<MovieDetail>(url, {
        params: {
          MaPhim: movieId,
        },
      })
      .pipe(
        map((result) => {
          // Thay đổi kết quả từ API
          const { lichChieu: showTimes, ...movie } = result;
          // Kết quả này sẽ được trả ra cho subscribe
          return { showTimes, movie };
        })
      );
  }
}
