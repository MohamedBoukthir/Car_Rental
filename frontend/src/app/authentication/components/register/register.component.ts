import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../../../../../utils/custom-validator';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

 registerForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private toastr: ToastrService,
    private router: Router
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
    this.authService.register(this.registerForm.value).subscribe((res) => {
      console.log(res);
      if(res.id != null) {
        this.toastr.success('You are Welcome' ,'Registration successful');
        this.router.navigateByUrl('/login');
      } else {
        this.toastr.error('Something went wrong', 'Registration failed');
      }
    })
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
