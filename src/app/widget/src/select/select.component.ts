import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { globals } from '@bc/global-variables';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'bc-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.sass'],
})
export class SelectComponent implements OnInit, OnChanges {
  @Input() action;
  @Input() options;
  @Output() sortChanged = new EventEmitter<string>();
  selectedDevice;
  constructor(public ApiService: ApiService, public globals: globals) { }
  ngOnChanges(changes: SimpleChanges): void {
  }
  sort(event) {
    this.sortChanged.emit((event.target as HTMLInputElement).value);
  }

  ngOnInit(): void { }
}
