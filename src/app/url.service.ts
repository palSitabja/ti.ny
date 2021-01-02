import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http:HttpClient) { }

  saveUrl(longUrl:string) : Observable<any>{//https://ti-nyurl.herokuapp.com/generate
    return <Observable<any>> this.http.post("https://covidindia-stats.herokuapp.com/",longUrl,{responseType:'text'});//
  }
}
