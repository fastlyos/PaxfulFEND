import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	Language;
  constructor( private httpService: HttpClient ) { }

  ngOnInit() {

  	this.httpService.get('./assets/language.json').subscribe(
      data => {
        this.Language = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(this.Language);
      },
        (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
