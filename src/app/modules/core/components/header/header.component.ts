import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { globals } from '@bc/global-variables';
import { LocalStorageService } from '@services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  state = false;
  languages = ['fa', 'en', 'ar'];
  defaultlanguage;
  menuItems = [
    { route: '', title: 'home.home' },
    { route: '/contact', title: 'home.contactUs' },
    { route: '/wishlist', title: 'home.wishlist' },
    { route: '/basket', title: 'home.BASKET' },
  ];
  constructor(
    private translate: TranslateService,
    public globals: globals,
    private localStorageService: LocalStorageService
  ) { }
  ngOnInit(): void {
    this.defaultlanguage = this.localStorageService.getItem('language');
    this.globals.language = this.defaultlanguage;

  }
  signOut() {
    this.localStorageService.setItem('userLoginName', '')
    this.localStorageService.setItem('userLoginId', '')
    this.localStorageService.setItem('userLoginEmail', '');
    this.globals.userLoginName = '';
    this.globals.userLoginId = '';
    this.globals.loginFlag = false;
  }
  changeLanguage(language) {
    this.state = true;
    this.translate.setDefaultLang(language);
    this.localStorageService.setItem('language', language)
    this.globals.language = language;
    this.state = false;
    location.reload();
  }
}
