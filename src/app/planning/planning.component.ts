import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  elements: any = [
    { first: 'Lundi', last: '8:30 am - 6:30 pm'},
    { first: 'Mardi', last: '8:30 am - 6:30 pm'},
    { first: 'Mercredi', last: '8:30 am - 6:30 pm'},
    { first: 'Jeudi', last: '8:30 am - 6:30 pm'},
    { first: 'Vendredi', last: '8:30 am - 6:30 pm'},
    {first: 'Samedi', last: 'Fermé'},
    {first: 'Dimanche', last: 'Fermé'},
  ];

  headElement = 'Heures de Travail ';

  constructor() { }

  ngOnInit(): void {
  }

}
