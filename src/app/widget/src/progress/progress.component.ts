import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bc-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.sass']
})
export class ProgressComponent implements OnInit {
@Input() progresstype;
@Input() state;

  constructor() { }
  ngOnInit(): void {
  }
}
