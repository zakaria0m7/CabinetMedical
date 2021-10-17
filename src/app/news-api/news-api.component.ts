import { Component, OnInit } from '@angular/core';
import {NewsApiService} from '../services/news-api.service'
@Component({
  selector: 'app-news-api',
  templateUrl: './news-api.component.html',
  styleUrls: ['./news-api.component.scss']
})
export class NewsApiComponent implements OnInit {

  news : any =[];
  allNews = '' ;

  constructor(private services:NewsApiService) { }

  ngOnInit(): void {
    this.services.topHeading().subscribe((result)=>{
      
      
      this.news = result as string[];

      this.news.articles.forEach((element : any) => {
        if((element.description!=null)&&(element.description!=''))
          this.allNews =this.allNews + element.description +'  ===>   ===>   ===>   ';
      });
      console.log(result);
    })
  }

}
