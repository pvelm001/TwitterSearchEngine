import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AdminService {


  public baseUrl: string = 'http://localhost:8080/api/';
  public limit: number = 20;


  constructor(private http: Http) { }


  errorHandler(error: Response){
    return Observable.throw(error.json() || "Server error");
  }


  getDataApi(url){
    return this.http.get(this.baseUrl +url)
              .map(response => response.json())
              .catch(this.errorHandler);
  }


  // postDataApi(url, input){
  //   var headers = this.getHeadersForMultipart();
  //   return this.http.post(this.baseUrl+url, input, {headers:headers})
  //         .map(response => response.json())
  //         .catch(this.errorHandler);
  // }




}
