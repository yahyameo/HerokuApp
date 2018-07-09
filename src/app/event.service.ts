import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import {  RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()
export class EventService {
eventsList:Observable<any[]>
apiKey:any;
hash:any;
     constructor(private http: HttpClient) {
   this.apiKey="f6522c0f5c1b5ed07444ebab15ab6b86";
   this.hash="32f84dc7ff91c1a7662a6a0a646e9d35";
}
getData():Observable<any[]>{
      let apiUrl = 'https://gateway.marvel.com/v1/public/events?apikey='+this.apiKey+'&hash='+this.hash+'&ts=1';   
      this.http.get(apiUrl).subscribe(data => {
      this.eventsList=data['data']['results'];
    });
    return this.eventsList;
   }
   
}
