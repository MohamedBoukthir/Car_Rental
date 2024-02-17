import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../../../../utils/custom-validator';

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
      name: ["", [Validators.required ]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, CustomValidators.passwordStrength()]],
    });
  }

  register() {
    console.log(this.registerForm.value);
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
