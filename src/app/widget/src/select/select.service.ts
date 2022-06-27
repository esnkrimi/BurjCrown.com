import { Injectable } from '@angular/core';
import { ApiService } from '@services/api.service';

@Injectable({
  providedIn: 'root',
})
export class SelectService {
  result;

  constructor(private ApiService: ApiService) { }
  public sort(event) {
    console.log((event.target as HTMLInputElement).value);
  }
}
