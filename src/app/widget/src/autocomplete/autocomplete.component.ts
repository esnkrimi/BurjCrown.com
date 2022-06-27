import { Component, Input, OnInit } from '@angular/core';
import { AutocompleteService } from './autocomplete.service';
import { Router } from '@angular/router';

@Component({
  selector: 'bc-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.sass'],
})
export class AutocompleteComponent implements OnInit {
  @Input() keyword;
  data = [
    {
      fullName: '',
    },
  ];
  constructor(private router: Router,private AutocompleteService: AutocompleteService) {}
  search(inputWord) {
  }
  onChangeSearch(inputWord) {
    this.AutocompleteService.autocomplete(inputWord);
    this.data = this.AutocompleteService.result;
  }
  ngOnInit(): void {}
}
