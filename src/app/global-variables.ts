import { Injectable } from '@angular/core';
@Injectable()
export class globals {
  appToShow;
  devicIsPc = true;
  language = 'en';
  loginFlag = false;
  loginUserProfileImage;
  loading = false;
  UrlHome = "http://www.burjcrown.com";
  filterIsChanged = false;
  filterCategory = "";
  filterSex = "";
  filterColor = "";
  filterScentType = "";
  filterScent = "";
  filterCountries = "";
  filterPerfumer = "";
  filterScentGroup = "";
  filterSizeExists = "";
  filterBrand = "";
  filterNature = "";
  filterSort = "";
  filterIsChangedValue = false;
  sortParameter = "do_id desc";
  filterToggle = false;
  userLoginId;
  userLoginName;
}
