import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-example-component',
  templateUrl: './ng-if-example-component.component.html',
  styleUrls: ['./ng-if-example-component.component.css']
})
export class NgIfExampleComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32
    },
    {
      "name": "Day  Meyers",
      "age": 21
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34
    },
    {
      "name": "Cook  Tyson",
      "age": 32
    }
  ];

}
