import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {

  constructor( private _toasterService: ToastrService) { }
  maxChars = 500;
  role = '';
  chars = 0;

  ngOnInit() {
  }
  copied(){
    this._toasterService.success('Address Copied!!!');  
  }
  

}
