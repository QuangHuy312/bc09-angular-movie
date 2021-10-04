import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_core/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  currentUser: any = {};
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    // bất cứ khi nào currentUser trong service thay đổi thì
    // nó sẽ chạy vào next và trả về data thay đổi

    this._authService.currenUserValue.subscribe({
      next: (data) => (this.currentUser = data),
    });
  }
}
