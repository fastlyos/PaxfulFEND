import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
	 modalRef: BsModalRef;
	 imagesUrl = [];
	 arr = [];
   currency;
  constructor(private httpService: HttpClient,private modalService: BsModalService) { }

  ngOnInit() {
            this.httpService.get('./assets/currencyJSON.json').subscribe(
      data => {
        this.currency = data as string [];   // FILL THE ARRAY WITH DATA.
         console.log(" currency ", this.currency);
      },
        (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    )
  	this.imagesUrl = ['assets/images/bitcoinist-2.png', 'assets/images/bitcoin-magazine-2.png', 'assets/images/bitcoin-magazine-2.png','assets/images/card-rates-2.png','assets/images/CCN-2.png','assets/images/coindesk-2.png','assets/images/coingeek-2.png','assets/images/coin-telegraph-2.png','assets/images/digital-trends-2.png','assets/images/forbes-2.png'];
}
  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }
}