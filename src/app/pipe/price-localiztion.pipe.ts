import { Pipe, PipeTransform } from '@angular/core'
import { globals } from '@bc/global-variables'
import { LocalStorageService } from '@services/local-storage.service'
@Pipe({
  name: 'priceLocaliztion',
  pure: false,
})
export class PriceLocaliztionPipe implements PipeTransform {
  constructor(private globals: globals,
    private localStorageService: LocalStorageService) { }
  transform(price): any {
    let language = this.localStorageService.getItem('language');
    return language === 'en'
      ? price / 28000
      : language === 'ar'
        ? price / 7000
        : price
  }
} 