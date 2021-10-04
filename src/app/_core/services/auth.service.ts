import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private _api: ApiService) {}
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
