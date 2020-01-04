import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BackendHost } from '../../assets/varconfig';

const host = BackendHost;

@Injectable({
    providedIn: 'root'
  })


  export class CommonService {

    constructor(private http: HttpClient) { }
  // POST FUNCTION
    postfunction(url,data): Observable<any> {
          const headers = new HttpHeaders()
          return this.http.post(host+url, data, { headers: headers });
    }

    activate(url, token): Observable<any> {
      const headers = new HttpHeaders()
      return this.http.get(host+url, { headers: headers });
    }
    
    loggedIn() {
      var check=localStorage.getItem("tokenasdf");
      if(check != null && check != undefined && check != ""){
        return true;
      }
      else{
        return false;
      }
    }
    
    keyup(token) {
      localStorage.setItem("tokenasdf",token);
    }


// GET FUNCTION
    // getfunction(url,data): Observable<any> {
    //       const headers = new HttpHeaders()
    //       return this.http.get(host+url, data, { headers: headers });
    // }
  }  