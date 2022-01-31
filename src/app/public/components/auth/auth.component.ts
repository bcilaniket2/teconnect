import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { WebSocketService } from '../../../core/services/web-socket.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})

export class AuthComponent implements OnInit {
  showPassword:any=false;
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
    private router: Router,
    private webSocketService: WebSocketService,
  ) {
    // this.webSocketService.listen('test event').subscribe((data) => {
    //   console.log(data)
    //   this.webSocketService.emit('ValidateServerUser', { "UserName": "1", "Password": "1" })
    // })
  }

  get registerFormControl() {
    return this.authForm.controls;
  }

showhidePassword(){
  this.showPassword=!this.showPassword
}

  onSubmit() {
    if (this.authForm.valid) {
      const userId = this.authForm.value.userId;
      const password = this.authForm.value.password;
      if (userId == '1' && password == '1') {
        this.webSocketService.listen('test event').subscribe((data) => {
          this.webSocketService.emit(userId, password)
          console.log(data)
        })
        //     this.webSocketService.emit(userId, password)
      }
    } else {
      this.authForm.markAllAsTouched();
    }
  }

  ngOnInit(): void {
  }

}
