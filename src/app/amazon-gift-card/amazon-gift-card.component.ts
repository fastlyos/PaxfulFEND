import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { FilterPipe } from 'ngx-filter-pipe';

import { HttpErrorResponse } from '@angular/common/http';
// import { flatten } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-amazon-gift-card',
  templateUrl: './amazon-gift-card.component.html',
  styleUrls: ['./amazon-gift-card.component.css']
})
export class AmazonGiftCardComponent implements OnInit {
  modalRef: BsModalRef;
  currency;
  Country;
  userFilter: any = { name: '' };
  curr = "Any Currency";
  Curr_name = "";
  reg_data;
  searchText;
  searchText1;
  CountryName = " INDIA "


  constructor(private httpService: HttpClient,
    private modalService: BsModalService,
    private _toasterService: ToastrService,
    private filter: FilterPipe) {
      }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  	  	this.httpService.get('./assets/currencyJSON.json').subscribe(
      data => {
        this.currency = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.currency);
      },
        (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

    this.httpService.get('./assets/country.json').subscribe(
  data => {
    this.Country = data as string [];	 // FILL THE ARRAY WITH DATA.
      console.log(this.Country);
  },
    (err: HttpErrorResponse) => {
    console.log (err.message);
  }
);
}

public icon = 'down'; public icon1 = 'down';
public content = 'Get your sharing link'
public toggleIcon() {
    if ((this.icon === 'down') || (this.content === 'Get your sharing link')) {
        this.icon = 'up';
        this.content = 'Hide your sharing Link';
        console.log("get")
    } else {
        this.icon = 'down';
        this.content = 'Get your sharing Link';
        console.log("Hide")
    }
}
  public toggleIcon1() {
    if (this.icon1 === 'down') {
        this.icon1 = 'up';
        
        console.log("get")
    } else {
        this.icon1 = 'down';
        
        console.log("Hide")
    }
  }
  copied(){
    this._toasterService.success('Address Copied!!!');    
  }
  slcTab(val , name) {
    this.curr = val;
    this.Curr_name = name;
  }

  CountryTab(val){
    this.CountryName = val;
  }



}
