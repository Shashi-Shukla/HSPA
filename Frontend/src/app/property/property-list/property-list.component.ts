import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties:Array<any> =
  [
    {
      "Id":1,
      "Name":"Birla House",
      "Type":"House",
      "Price":12000,
    },
    {
      "Id":2,
      "Name":"Mannat House",
      "Type":"Villa",
      "Price":15000,
    },
    {
      "Id":3,
      "Name":"TATA House",
      "Type":"House",
      "Price":18000,
    },
    {
      "Id":4,
      "Name":"Adani House",
      "Type":"Villa",
      "Price":12000,
    },
    {
      "Id":5,
      "Name":"Shukla House",
      "Type":"Farm House",
      "Price":5000,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
