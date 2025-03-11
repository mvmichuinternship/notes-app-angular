import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NotesServiceService } from '../../notes-service.service';
import { Store } from '@ngrx/store';
import { LoginAction } from '../../users/user.action';
import { selectLoginUser } from '../../users/user.selector';
import { User } from '../../interfaces/user';
import { UserState } from '../../users/user.reducer';
import { AppState } from '../../app.state';
import { Router } from '@angular/router';
import { UserServiceService } from '../../user-service/user-service.service';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,NgIf,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  userName!: '';
  password!: '';
  // user!: { username: string; password: string } | null;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router,
    private userService: UserServiceService
  ) {
    // this.store.select(selectLoginUser).subscribe((user) => (this.user = user));
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6), 
      ]),
    });
  }

  get username(){
    return this.loginForm.get('username');
  }
  get passwords(){
    return this.loginForm.get('password');
  }
  onSubmit() {
    // this.userName = this.loginForm.value.username;
    // this.password = this.loginForm.get('password')?.value;
    // const loginData = {
    //   username: this.userName,
    //   password: this.password,
    //   token: null,
    // };

    this.store.dispatch(
      LoginAction({
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
        // No token here - it will be generated in the service
      })
    );
    // this.userService.login(loginData);
  }
}
