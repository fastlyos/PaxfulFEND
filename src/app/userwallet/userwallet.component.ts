import { Component, OnInit } from '@angular/core';
// import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-userwallet',
  templateUrl: './userwallet.component.html',
  styleUrls: ['./userwallet.component.css'],

})
export class UserwalletComponent implements OnInit {

  constructor(
    private _toasterService: ToastrService) { 
    // this.handleClipboardResponse();
  }

  ngOnInit() {

  }

  // handleClipboardResponse() {
  //   this._clipboardService.copyObservable$.subscribe((res: IClipboardResponse) => {
  //     if (res.isSuccess) {
  //       this._toasterService.pop('success', undefined, res.successMessage);
  //     }
  //   });
  // }\

  copied(){
    this._toasterService.success('Address Copied!!!');
  }


}
