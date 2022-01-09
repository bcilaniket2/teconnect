import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent implements OnInit {
  authForm = this.formBuilder.group({
    userId: [
      '',
      [
        Validators.required,
        // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ],
    ],

    password: [
      '',
      [
        Validators.required,
        // Validators.minLength(8),
        Validators.maxLength(50),
      ],
    ],
    // checkArray: this.formBuilder.array([], [Validators.required]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) // private _authService: AuthService,
  // private _errService: ErrorService
  {
    console.log('auth');
  }

  get registerFormControl() {
    return this.authForm.controls;
  }

  onSubmit() {
    if (this.authForm.valid) {
      const userId = this.authForm.value.userId;
      const password = this.authForm.value.password;
      if (userId == 'admin' && password == '12345') {
        this.router.navigate(['menu']);
      }
    } else {
      this.authForm.markAllAsTouched();
    }
  }

  ngOnInit(): void {
    // this._authService.user.subscribe((res) => {
    //   if (res) {
    //     this.router.navigate(['dashboard/money-transfer']);
    //   }
    // });
  }
}
