import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import {  RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

eventDetail:Observable<any>
apiKey:any;
hash:any;
     constructor(private http: HttpClient,
     private route:
     ActivatedRoute) {
   this.apiKey="f6522c0f5c1b5ed07444ebab15ab6b86";
   this.hash="32f84dc7ff91c1a7662a6a0a646e9d35";
   this.getData();
}

  ngOnInit() {
            console.log(this.route.snapshot.params['eventId']);

  }
  getData(){
    let id=this.route.snapshot.params['eventId']
      let apiUrl = 'https://gateway.marvel.com/v1/public/events/'+id+'?apikey='+this.apiKey+'&hash='+this.hash+'&ts=1';   
      this.http.get(apiUrl).subscribe(data => {
      this.eventDetail=data['data']['results'];
      console.log(this.eventDetail)
    });
   }

}
