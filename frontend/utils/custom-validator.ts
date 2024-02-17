//? AbstractControl: A base class for the concrete form control classes FormControl, FormGroup, and FormArray. It provides their common behaviors and properties.
//? ValidationErrors: A type representing the structure of validation errors. It's an object with key-value pairs, where the key is the error name and the value can be any.

import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  /*
  //* Static method called passwordStrength tha returns a function that takes a control as an argument,
  //* and returns a ValidationErrors object if the validation fails, otherwise null.

  */
  static passwordStrength() {
    return (control: AbstractControl): ValidationErrors | null => {
      //* This line retrieves the current value of the form control that the validator is applied to.
      const value = control.value;
      if (!value) {
        return null;
      }

      //* Validation checks criteria
      const hasUpperCase = /[A-Z]+/.test(value);
      const hasLowerCase = /[a-z]+/.test(value);
      const hasNumeric = /[0-9]+/.test(value);
      const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
      const passwordValid =
        hasUpperCase &&
        hasLowerCase &&
        hasNumeric &&
        hasSpecial &&
        value.length >= 8;

      //*The password is considered valid if it meets all the criteria.
      return !passwordValid ? { passwordStrength: true } : null;
    };
  }
}