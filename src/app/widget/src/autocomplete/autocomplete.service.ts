import { Injectable } from '@angular/core';
import { ApiService } from '@services/api.service';

@Injectable({
  providedIn: 'root',
})
export class AutocompleteService {
  result;

  constructor(private ApiService: ApiService) {}
  public autocomplete(inputWord) {
    this.ApiService.autocomplete(inputWord).subscribe((val) => {
      this.result = val;
    });
  }
}
