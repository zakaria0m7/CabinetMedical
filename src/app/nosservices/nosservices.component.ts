import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosservices',
  templateUrl: './nosservices.component.html',
  styleUrls: ['./nosservices.component.scss']
})
export class NosservicesComponent implements OnInit {
  img1= 'assets/images/ca.png';
  img2= 'assets/images/cab.png';
  img3= 'assets/images/emergency.png';
  vid3='assets/videos/vid1.mp4';
  vid2='assets/videos/vid2.mp4';
  vid1='assets/videos/vid3.mp4';
  constructor() { }

  ngOnInit(): void {
  }

}
