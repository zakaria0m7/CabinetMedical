import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-clinique',
  templateUrl: './news-clinique.component.html',
  styleUrls: ['./news-clinique.component.scss']
})
export class NewsCliniqueComponent implements OnInit {

  cards = [
    {img: 'assets/images/bureau.jpg'},
    {img: 'assets/images/cabinet.jpg'},

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
