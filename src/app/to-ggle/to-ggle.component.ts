import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'to-ggle',
  templateUrl: './to-ggle.component.html',
  styleUrls: ['./to-ggle.component.css']
})
export class ToGGLeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
  defaultNumber = 0;
  rndNumber = (Math.random() * 10).toFixed(0);


  increment(){
    this.defaultNumber =  this.defaultNumber += Math.floor(Math.random( ) * 10);

  }
  decrement(){
    this.defaultNumber =  this.defaultNumber -= Math.floor(Math.random( ) * 10);
  }
}
