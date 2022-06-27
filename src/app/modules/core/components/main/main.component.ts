import { Component, Input, OnChanges, OnInit, SimpleChanges, AfterViewChecked, OnDestroy, Inject } from '@angular/core';
import { ApiService } from '@services/api.service';
import { FilterService } from '../filter/filter.service'
import { globals } from '@bc/global-variables';
import { TranslateService } from '@ngx-translate/core';
import { LocalStorageService } from '@services/local-storage.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, OnChanges, OnDestroy {
  @Input() filterIsChangedValue;
  data$;
  paginationPageNumber: number = 1;
  options;
  language;
  DEVICE_TYPE_IS_PC;
  constructor(
    private translate: TranslateService,
    public globals: globals,
    private ApiService: ApiService,
    private localStorageService: LocalStorageService,
    private FilterService: FilterService
  ) { }
  ngOnDestroy(): void {
    this.globals.loading = false;
  }
  ngOnChanges(): void {
    this.fetchProducts('do_id');
    this.language = this.localStorageService.getItem('language');
    this.DEVICE_TYPE_IS_PC = this.localStorageService.getItem('DEVICE_TYPE_IS_PC');

    this.sortInitialize(this.language);
    this.translate.setDefaultLang(this.language);
  }
  toggle() {
    this.FilterService.toggle();
  }
  sortChanged(event) {
    this.fetchProducts(event);
    this.language = this.localStorageService.getItem('language');
    this.sortInitialize(this.language);
    this.translate.setDefaultLang(this.language);
  }
  ngOnInit(): void {
    this.fetchProducts('do_id');
  }
  sortInitialize(language) {
    switch (language) {
      case 'fa':
        this.options = [["do_id desc", "جدیدترین"], ["do_price", "ارزانترین"], ["do_price desc", "گرانترین"]]
        break;
      case 'en':
        this.options = [["do_id desc", "NEW PRODUCTS"], ["do_price", "LOW PRICE"], ["do_price desc", "HIGH PRICE"]]
        break;
      default:
        this.options = [["do_id desc", "الاجدد"], ["do_price", "أرخص"], ["do_price desc", "الأغلى"]]
        break;

    }
  }

  fetchProducts(sortWay) {
    this.data$ = this.ApiService.fetchProducts(sortWay);
  }
  sort(event) {
    console.log(event)
  }
}
