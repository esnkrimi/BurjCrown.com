import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceToDogecoin'
})
export class PriceToDogecoinPipe implements PipeTransform {

  transform(price): unknown {
    return price * 1020;
  }

}
