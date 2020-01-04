import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-buy-bit-coin',
  templateUrl: './buy-bit-coin.component.html',
  styleUrls: ['./buy-bit-coin.component.css']
})
export class BuyBitCoinComponent implements OnInit {
  currency;Country;
  constructor(private httpService: HttpClient,
    private _toasterService: ToastrService ) { }

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
}
