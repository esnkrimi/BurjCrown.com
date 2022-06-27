import { Component, Inject, OnInit } from '@angular/core'
import { DEVICE_TYPE_IS_PC } from './app.module'
import { globals } from '@bc/global-variables'
import { LocalStorageService } from '@services/local-storage.service'
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  filter = [
    'filterCategory',
    'filterBrand',
    'filterPrice',
    'filterSex',
    'filterSizeExists',
    'filterNature',
    'filterScent',
    'filterScentGroup',
    'filterColor',
    'filterCountries',
    'filterPerfumer',
  ]
  title = 'burjcrown';
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private translate: TranslateService,
    @Inject(DEVICE_TYPE_IS_PC) private DEVICE_TYPE_IS_PC_: boolean,
    public globals: globals,
  ) {
    this.translate.setDefaultLang('en')
    this.globals.devicIsPc = DEVICE_TYPE_IS_PC_;

    this.localStorageService.setItem('DEVICE_TYPE_IS_PC', String(DEVICE_TYPE_IS_PC_));
    this.globals.userLoginId = this.localStorageService.getItem('userLoginId')
    this.globals.userLoginName = this.localStorageService.getItem('userLoginName')
    this.globals.userLoginId > 0
      ? (this.globals.loginFlag = true)
      : (this.globals.loginFlag = false)
  }

  clearFilters() {
    this.globals.filterIsChanged = false;
    this.globals.filterToggle = !this.globals.filterToggle;
    for (let i of this.filter)
      this.globals[i] = '';
    this.router.navigate(['']);

  }

}
