import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '@services/api.service';
import { globals } from '@bc/global-variables';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { Options } from '@angular-slider/ngx-slider';
import { LocalStorageService } from '@services/local-storage.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass'],
})
export class FilterComponent implements OnInit, OnChanges {
  data;
  language;
  FilterPriceValue = 100000;
  FilterPriceOptions: Options = {//for price range slider
    floor: 1,
    ceil: 15
  };
  objectKeys = Object.keys;
  result;
  @Input() filterType;
  constructor(private router: Router,
    private translate: TranslateService,
    private localStorageService: LocalStorageService,
    public globals: globals,
    private ApiService: ApiService) {
    this.data = [];
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.language = this.localStorageService.getItem('language');
    this.translate.setDefaultLang(this.language);
  }
  applyFilter(filterType, value) {
    this.globals[filterType] = value;
    this.globals.filterIsChanged = true;
    this.globals.filterToggle = false;
    this.router.navigate(["/filter", this.globals[filterType]]);
  }

  ngOnInit(): void {
    this.data = this.ApiService.getFilterList(this.filterType);
  }


}