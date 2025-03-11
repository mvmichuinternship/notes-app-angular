import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      firstName: '',
      lastName: '',
      image: '',
      username: '',
      password: '',
      cPassword: '',
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
