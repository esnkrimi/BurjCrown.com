import { Directive, ElementRef } from '@angular/core';
import { globals } from '@bc/global-variables';

@Directive({
  selector: '[appPrice]'
})
export class PriceDirective {
  constructor(private el: ElementRef,private globals:globals) { }
  ngOnInit(): void {
    this.priceLocalize();
  }

  private priceLocalize() {
    this.globals.language==='en'
    ?this.el.nativeElement.style.direction='rtl'
    :this.el.nativeElement.style.direction='rtl';
    }
}
