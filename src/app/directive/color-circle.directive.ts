import { Directive, ElementRef, Input, OnInit,OnChanges } from '@angular/core';

@Directive({
  selector: '[ColorCircle]'
})
export class ColorCircleDirective implements OnInit,OnChanges {
  @Input() ColorCircle ;
  constructor(private el: ElementRef) {
   }
   ngOnInit() {
    this.ColorCircleDrawer(this.ColorCircle);
   }
  private ColorCircleDrawer(color) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  ngOnChanges(){
    this.ColorCircleDrawer(this.ColorCircle);
  }

}
