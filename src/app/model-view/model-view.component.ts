import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-model-view',
  templateUrl: './model-view.component.html',
  styleUrls: ['./model-view.component.css']
})
export class ModelViewComponent implements OnInit {

   arrBirds;bank;onlineTransfer;GiftCard;activeId;


  constructor(private httpService: HttpClient) { }

  ngOnInit() {
  	
  	 this.httpService.get('./assets/showall.json').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.arrBirds);
      },
        (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  	 this.httpService.get('./assets/bank.json').subscribe(
      data => {
        this.bank = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.bank);
      },
        (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  	 this.httpService.get('./assets/OnlineTransfer.json').subscribe(
      data => {
        this.onlineTransfer = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.onlineTransfer);
      },
        (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

  	 this.httpService.get('./assets/GiftCards.json').subscribe(
      data => {
        this.GiftCard = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.GiftCard);
      },
        (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  	
  }

  colorchange(item){
    this.activeId = item
  }

}
