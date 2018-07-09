import { Component } from '@angular/core';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import {  RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'app';
     constructor(private http: HttpClient) {

}

  
   
//  postData() {
//    console.log(this.cash);
//    var requestData={cash:this.cash,safekeeping:this.safekeeping,cpu:this.cpu,mobileSmall:this.mobileSmall,mobileBig:this.mobileBig}
//     const headers = new Headers({ 'Content-Type': 'application/json' });
//     const options = new RequestOptions({ headers: headers });
// let apiUrl = 'http://localhost:3000/api/post';
//     this.http.post(apiUrl, requestData, {
//       headers: new HttpHeaders()
//         .set('Authorization', 'your-auth-token-if-needed')
//         .set('Content-Type', 'application/json')
//     })
//     .subscribe(data => {
//       console.log(data);
//       // do something here
//     });
//   } 



}
