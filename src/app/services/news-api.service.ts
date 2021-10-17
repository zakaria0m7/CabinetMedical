import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=ma&category=health&apiKey=b6da77b069914001a74a72825f1bbeeb"

  topHeading() 
  {
    return this.http.get(this.newsApiUrl)
  }
}
