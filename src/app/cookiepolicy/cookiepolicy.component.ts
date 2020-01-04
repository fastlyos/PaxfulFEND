import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-cookiepolicy',
  templateUrl: './cookiepolicy.component.html',
  styleUrls: ['./cookiepolicy.component.css']
})
export class CookiepolicyComponent implements OnInit {
	currency;
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
  	this.httpService.get('./assets/currency.json').subscribe(
      data => {
        this.currency = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.currency);
      },
        (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
