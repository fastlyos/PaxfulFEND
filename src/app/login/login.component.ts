import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup} from "@angular/forms";
import { CommonService } from '../service/common.service';
import { ActivatedRoute,NavigationEnd, Router, NavigationExtras } from '@angular/router';
import {  } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
       hide = true;
       model:any = {};
       userIn:Boolean = false;
	resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response: ${captchaResponse}`);
    }
  
    protected FormGroup: FormGroup;
    constructor(private fb: FormBuilder, private service : CommonService,   
      private toastr: ToastrService,private router: Router,  
      private route:ActivatedRoute,) {}

  ngOnInit() {
    var idd = this.route.snapshot.paramMap.get('id')
    if (idd != null) {
      this.service.activate('users/activate', idd).subscribe( res => { })
    }
  	this.userIn = this.service.loggedIn();
  	if(this.userIn == true) {
  		this.router.navigate(['/home']);
  	}
  }
  onSubmit() {
    var datas = {
     
      "email_ID": this.model.email,
      "Password": this.model.pass,
    }
    this.service.postfunction('users/login',datas).subscribe( res => {
      console.log(res)
      if(res.status == true) {
        this.toastr.clear();
        this.toastr.success(res.message,'Success');
        this.router.navigate(['/homepage']);
      }
      else {
        this.toastr.clear();
        this.toastr.error(res.message,'Oops');
      }
    })
  }

}
