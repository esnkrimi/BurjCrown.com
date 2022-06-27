import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'bc-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.sass'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SlideshowComponent implements OnInit, OnChanges {
  @Input() imgobj;
  selectImg;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.selectImg = this.imgobj[2];
  }

  ngOnInit(): void {
  }
}
