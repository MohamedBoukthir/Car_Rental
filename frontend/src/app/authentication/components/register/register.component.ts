import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

 registerForm!: FormGroup;


  constructor(
    private fb: FormBuilder
    ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ["", [Validators.required], Validators.maxLength(50), Validators.pattern('^[a-zA-Z ]*$')],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }



}
