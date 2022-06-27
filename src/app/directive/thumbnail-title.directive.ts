import { Directive, ElementRef } from '@angular/core';
import { globals } from '@bc/global-variables';

@Directive({
  selector: '[appThumbnailTitle]'
})
export class ThumbnailTitleDirective {
  constructor(private el: ElementRef,private globals:globals) { }
  ngOnInit(): void {
    this.textLocalize();
  }

  private textLocalize() {
  this.globals.language==='en'
  ?this.el.nativeElement.style.textAlign='left'
  :this.el.nativeElement.style.textAlign='right';
  }
}
