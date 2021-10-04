import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/_core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}
  handleSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this._authService.login(this.loginForm.value).subscribe({
      next: (data) => {
        localStorage.setItem('user', JSON.stringify(data));

        const { redirectTo } = this._activatedRoute.snapshot.queryParams;
        this._authService.currenUser = data;
        this._router.navigateByUrl(redirectTo || '/');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {}
}
