import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : null;
    // if (userJson) {
    //   // có user trong localStorage => ktra mã loại ng dùng
    //   const { maLoaiNguoiDung } = JSON.parse(userJson);
    //   if (maLoaiNguoiDung === 'QuanTri') {
    //     return true;
    //   }
    // }
    if (!user) {
      this._router.navigate(['/login'], {
        queryParams: { redirectTo: state.url },
      });

      return false;
    }
    if (user.maLoaiNguoiDung !== 'QuanTri') {
      this._router.navigateByUrl('/');
      return false;
    }

    return true;
  }
}
