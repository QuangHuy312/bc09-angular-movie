import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _currenUser = new BehaviorSubject<any>({});
  currenUserValue = this._currenUser.asObservable();
  // _currenUser.next(value) :set value mới cho currrentUser
  // _currenUser.value : get value của _currenUser
  // _currenUser.asObservable() : chuyển _currenUser thành 1 observable
  //   => có thể subcribe sự thay đổi data của nó

  constructor(private _api: ApiService) {
    const userJson = localStorage.getItem('user');
    const user = userJson ? JSON.parse(userJson) : null;
    if (user) {
      this.currenUser.next(user);
    }
  }
  get currenUser() {
    return this._currenUser.value;
  }

  set currenUser(value) {
    this._currenUser.next(value);
  }
  login(credentials: any) {
    return this._api.post('QuanLyNguoiDung/DangNhap', credentials);
  }
  register(credentials: any) {
    return this._api.post('QuanLyNguoiDung/DangKy', {
      ...credentials,
      maNhom: 'GP01',
    });
  }
}
