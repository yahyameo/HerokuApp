import { Component, OnInit } from '@angular/core';
import { EventService } from "../event.service";
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import {  RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
eventsList:Observable<any[]>
apiKey:any;
hash:any;
searchBy:any;
     constructor(private http: HttpClient) {
   this.apiKey="f6522c0f5c1b5ed07444ebab15ab6b86";
   this.hash="32f84dc7ff91c1a7662a6a0a646e9d35";
   this.getData();
}
onSubmit(){
  this.getData();
}
getData():Observable<any[]>{
    var apiUrl=''
  if(this.searchBy){
           apiUrl = 'https://gateway.marvel.com/v1/public/characters?nameStartsWith='+this.searchBy+'&apikey='+this.apiKey+'&hash='+this.hash+'&ts=1';   
  }
  else{
       apiUrl = 'https://gateway.marvel.com/v1/public/characters?apikey='+this.apiKey+'&hash='+this.hash+'&ts=1';   

  }
      this.http.get(apiUrl).subscribe(data => {
      this.eventsList=data['data']['results'];
    });
    return this.eventsList;
   }

  ngOnInit() {
  }

}
