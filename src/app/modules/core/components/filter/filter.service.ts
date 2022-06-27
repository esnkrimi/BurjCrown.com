import { Injectable } from '@angular/core';
import { globals } from '@bc/global-variables';
import { ApiService } from '@services/api.service';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  constructor(private ApiService: ApiService, private globals: globals) { }
  public toggle() {
    this.globals.filterToggle = !this.globals.filterToggle;
  }
}
