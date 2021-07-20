import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Account} from '../account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  account: Account = {
    email: 'user@gmail.com',
    password: '123456'
  };
  successMsg: string;
  loginForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [this.checkEmailValid]),
      password: new FormControl('', [this.checkPasswordValid])
    });
  }

  onSubmit() {
    let isValidAccount = false;
    const accountInput = this.loginForm.value;
    if (accountInput.email === this.account.email && accountInput.password === this.account.password) {
      isValidAccount = true;
      this.successMsg = 'Login success';
    }
  }


  checkEmailValid(c: AbstractControl) {
    const v = c.value;
    const regex = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$';
    return (v.match(regex) === null) ? {invalidemail: true} : null;
  }

  checkPasswordValid(c: AbstractControl) {
    const v = c.value;
    return (v.length >= 6) ? null : {invalidpassword: true};
  }
}
