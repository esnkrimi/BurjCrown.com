import { Component, Input, OnInit } from '@angular/core';
import { globals } from '@bc/global-variables';

@Component({
  selector: 'bc-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {
  @Input() template;
  @Input() products;

  
  constructor(public globals: globals) { }

  ngOnInit(): void {
  }

}
