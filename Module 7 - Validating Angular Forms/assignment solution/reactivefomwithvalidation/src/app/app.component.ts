import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';

import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder) { }
  title = 'Module7Assign2';


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      tnc: ['', Validators.required]
    }, {
      validator: ConfirmPasswordValidator.MatchPassword
  });

  }


  get fval() { 
    return this.registerForm.controls; 
  }
  //this.user.fullName='';
  signup(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    alert('form fields are validated successfully!');  
  }
}
