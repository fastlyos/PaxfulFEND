import { Component, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-paysafecard',
  templateUrl: './paysafecard.component.html',
  styleUrls: ['./paysafecard.component.css']
})
export class PaysafecardComponent implements OnInit {

  modalRef: BsModalRef;
  currency;Country;
  constructor(private httpService: HttpClient,
  	private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

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

  public icon = 'keyboard_arrow_down'; 

	public toggleIcon() {
    	if (this.icon === 'keyboard_arrow_down') {
        	this.icon = 'keyboard_arrow_up';
    	} else {
	        this.icon = 'keyboard_arrow_down'
	    }
}
}
