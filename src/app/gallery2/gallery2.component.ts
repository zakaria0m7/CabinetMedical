import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery2',
  templateUrl: './gallery2.component.html',
  styleUrls: ['./gallery2.component.scss']
})
export class Gallery2Component implements OnInit {
  img1= 'assets/images/bureau.jpg';
  img2= 'assets/images/cabinet.jpg';
  img3= 'assets/images/Eviter-cambriolage-cabinet-medical.jpg';
  img4= 'assets/images/ouvrir-un-cabinet-medical.jpg';
  img5= 'assets/images/1597396687784_b0b.jfif';
  img6= 'assets/images/unnamed.jpg';
  img7= 'assets/images/istockphoto-535116595-170667a.jpg';
  img8= 'assets/images/Radio1.jpg';
  img9= 'assets/images/MG_0800r-1-1200x800.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
