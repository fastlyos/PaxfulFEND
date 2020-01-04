import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
	public imagesUrl;

  constructor() { }

  ngOnInit() {
  	 this.imagesUrl = ['assets/images/bitcoinist-2.png', 'assets/images/bitcoin-magazine-2.png', 'assets/images/bitcoin-magazine-2.png','assets/images/card-rates-2.png','assets/images/CCN-2.png','assets/images/coindesk-2.png','assets/images/coingeek-2.png','assets/images/coin-telegraph-2.png','assets/images/digital-trends-2.png','assets/images/forbes-2.png'];
  }

}
