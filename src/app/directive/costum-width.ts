import { Directive, ElementRef, Input, OnInit,OnChanges } from '@angular/core';

@Directive({
  selector: '[CostumWidth]'
})
export class CostumWidthDirective implements OnInit,OnChanges {
  @Input() CostumWidth ;
  constructor(private el: ElementRef) {
   }
   ngOnChanges(){
     this.ColorCircleDrawer(this.CostumWidth);
   }
   ngOnInit() {
    this.ColorCircleDrawer(this.CostumWidth);
   }
  private ColorCircleDrawer(width) {
    this.el.nativeElement.style.width = width;
  }

}
