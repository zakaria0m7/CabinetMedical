import {AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-multi-item-gallery',
  templateUrl: './multi-item-gallery.component.html',
  styleUrls: ['./multi-item-gallery.component.scss']
})
export class MultiItemGalleryComponent implements OnInit, AfterViewInit {

  cards = [
    {img: 'assets/images/bureau.jpg'},
    {img: 'assets/images/cabinet.jpg'},
    {img: 'assets/images/Eviter-cambriolage-cabinet-medical.jpg'},
    {img: 'assets/images/ouvrir-un-cabinet-medical.jpg'},
    {img: 'assets/images/1597396687784_b0b.jfif'},
    {img: 'assets/images/unnamed.jpg'},
    {img: 'assets/images/istockphoto-535116595-170667a.jpg'},
    {img: 'assets/images/Radio1.jpg'},
    {img: 'assets/images/MG_0800r-1-1200x800.jpg'},
  
  ];
  
  slides: any = [[]];

  constructor(private renderer: Renderer2) { }

  chunk(arr: any, chunkSize: number) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  

  ngOnInit(): void {
    this.slides = this.chunk(this.cards, 3);
  }

  ngAfterViewInit() {
    const buttons = document.querySelectorAll('.btn-floating');
    buttons.forEach((el: any) => {
      this.renderer.removeClass(el, 'btn-floating');
      this.renderer.addClass(el, 'px-3');
      this.renderer.addClass(el.firstElementChild, 'fa-3x');
    });
  }

}
