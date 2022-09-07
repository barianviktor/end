import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  @Output() formIsValid = new EventEmitter<{
    username: string;
    password: string;
  }>();
  constructor(private fb: FormBuilder) {
    this.loginForm = fb.group({
      username: [
        '',
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)],
        },
      ],
      password: [
        '',

        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.pattern(/^[a-zA-Z0-9]*$/),
          ],
        },
      ],
    });
  }
  get username(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }
  get password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
  ngOnInit(): void {}
  onSubmit() {
    if (this.loginForm.valid) {
      this.formIsValid.emit(this.loginForm.value);
    }
  }
}
