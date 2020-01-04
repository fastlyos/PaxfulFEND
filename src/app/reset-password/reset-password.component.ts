import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup} from "@angular/forms";
import {  PasswordValidator, ParentErrorStateMatcher } from 'src/app/validators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  accountDetailsForm: FormGroup;   matching_passwords_group: FormGroup;
  account_validation_messages = {

    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],

    }



  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForms();
  }

  createForms(){

        // matching passwords validation
        this.matching_passwords_group = new FormGroup({
          password: new FormControl('', Validators.compose([
            Validators.minLength(5),
            Validators.required,
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[a-zA-Z0-9_.$@$!%*?&+-]+$')
          ])),
          confirm_password: new FormControl('', Validators.required)
        }, (formGroup: FormGroup) => {
          return PasswordValidator.areEqual(formGroup);
        });

     this.accountDetailsForm = this.fb.group({
     
      // password: new FormControl('', Validators.compose([
      //   Validators.minLength(5),
      //   Validators.required,
      //   Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[a-zA-Z0-9_.$@$!%*?&+-]+$')
      // ])),
      matching_passwords: this.matching_passwords_group
 
   })
  }
    onSubmitAccountDetails(value){
    console.log(value);
    this.accountDetailsForm.reset(this.accountDetailsForm)
    alert("Hello! Account Created Successfully!!!");
    
   
  }
}
