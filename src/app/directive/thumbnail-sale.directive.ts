import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appThumbnailSale]'
})
export class ThumbnailSaleDirective implements OnInit {
@Input() appThumbnailSale;
  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    this.saleDrawer(this.appThumbnailSale);
  }

  private saleDrawer(sale) {
    if(sale>49)
    {
      this.el.nativeElement.style.backgroundColor = 'green';
    return 
   }
   this.el.nativeElement.style.backgroundColor = 'red';

  }


}
