import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup} from "@angular/forms";
import {  PasswordValidator, ParentErrorStateMatcher } from 'src/app/validators';
// import { HttpClient, HttpEventType } from '@angular/common/http';
import { CommonService } from '../service/common.service';
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  model:any = {};
  userIn:Boolean = false;
  accountDetailsForm: FormGroup; 
  matching_passwords_group: FormGroup;
  parentErrorStateMatcher = new ParentErrorStateMatcher();
  hide = true;
  resolved(captchaResponse: string) {
    // console.log(`Resolved captcha with response: ${captchaResponse}`);
}

account_validation_messages = {
  'email': [
    { type: 'required', message: 'Email is required' },
    { type: 'pattern', message: 'Enter a valid email' }
  ],
  'username': [
    { type: 'required', message: 'Username is required' },
    { type: 'minlength', message: 'Username must be at least 8 characters long' },
    { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
    { type: 'pattern', message: 'Your username must contain only letters first letter should be in capital' },
    { type: 'validUsername', message: 'Your username has already been taken' }
  ],
  'confirm_password': [
    { type: 'required', message: 'Confirm password is required' },
    { type: 'areEqual', message: 'Password mismatch' }
  ],
  'password': [
    { type: 'required', message: 'Password is required' },
    { type: 'minlength', message: 'Password must be at least 5 characters long' },
    { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
  ],
  'terms': [
    { type: 'pattern', message: 'You must accept terms and conditions' }
  ]
  }


  constructor(private fb: FormBuilder, private service : CommonService,   
              private toastr: ToastrService,private router: Router) {}
  


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
      username: new FormControl('', Validators.compose([
        Validators.maxLength(20),
        Validators.minLength(8),
        Validators.pattern('^[A-Z][a-z]+$'),
        Validators.required
       ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z]+.[a-zA-Z]+$')
      ])),
      matching_passwords: this.matching_passwords_group,
      terms: new FormControl(false, Validators.pattern('true'))
   })
  }
    onSubmitAccountDetails(value){
    var datas = {
      "username": this.accountDetailsForm.value.username,
      "email_ID": this.accountDetailsForm.value.email,
      "Password": this.matching_passwords_group.value.password,
    }
    this.service.postfunction('users/register',datas).subscribe( res => {
      if(res.status == true) {
        this.toastr.clear();
        this.toastr.success(res.message,'Account Created Successfully!!!');
        this.router.navigate(['/homepage']);
      }
      else {
        this.toastr.clear();
        this.toastr.error(res.message,'Oops');
      }
    })
  this.accountDetailsForm.reset(this.accountDetailsForm)
  }


   onSubmit() {
     
   }
 
}