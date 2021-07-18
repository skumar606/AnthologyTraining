import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitchexample',
  templateUrl: './ngswitchexample.component.html',
  styleUrls: ['./ngswitchexample.component.css']
})
export class NgswitchexampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "age": 35,
      "country": 'MARS'
    },
    {
      "name": "Mcleod  Mueller",
      "age": 32,
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "age": 21,
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "age": 34,
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "age": 32,
      "country": 'USA'
    }
  ];

  teacher: object [] = [
      {
          subject: '',
          name: ''
      }
  ]

}
