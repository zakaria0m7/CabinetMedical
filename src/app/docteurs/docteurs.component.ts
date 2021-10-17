import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docteurs',
  templateUrl: './docteurs.component.html',
  styleUrls: ['./docteurs.component.scss']
})
export class DocteursComponent implements OnInit {

  img2 = 'assets/images/infermiere.png';
  img1 = 'assets/images/secretaire.png';
  constructor() { }

  ngOnInit(): void {
  }

}
