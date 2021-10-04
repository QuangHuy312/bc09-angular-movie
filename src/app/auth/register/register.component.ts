import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_core/services/auth.service';

//FormControl: quản lý đơn vị nhỏ lẻ input , select, checkbox
//FormGroup : quản lý tập hợp một nhóm các FormControl

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isLoading: boolean = false;
  error: string = '';

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) {
    // this.registerForm = new FormGroup({
    //   taiKhoan: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(5),
    //   ]),
    //   matKhau: new FormControl('', [
    // Validators.required,
    // Validators.pattern('(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'),
    //   ]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   hoTen: new FormControl('', [Validators.required]),
    //   soDt: new FormControl('', [Validators.required]),
    // });

    // cách 2 :
    this.registerForm = this._fb.group({
      taiKhoan: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
      matKhau: [
        '',
        Validators.compose([
          Validators.required,
          // Validators.pattern(/(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}/),
          Validators.minLength(5),
        ]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      hoTen: ['', Validators.compose([Validators.required])],
      soDt: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {}
  handleSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.isLoading = true;
    this._authService.register(this.registerForm.value).subscribe({
      next: (data) => {
        // đăng ký thành công => redirect login
        this.error = '';
        this.isLoading = false;
        this._router.navigateByUrl('/login');
      },
      error: (error) => {
        this.isLoading = false;
        this.error = error.error;
      },
    });
    console.log(this.registerForm.value);
  }
}
