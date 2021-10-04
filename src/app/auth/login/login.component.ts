import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(private _authService: AuthService, private _router: Router) {}
  handleSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this._authService.login(this.loginForm.value).subscribe({
      next: (data) => {
        localStorage.setItem('user', JSON.stringify(data));
        this._router.navigateByUrl('/');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {}
}
