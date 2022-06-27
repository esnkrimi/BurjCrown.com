import { ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { globals } from '@bc/global-variables';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class ParentComponent implements OnInit,OnChanges {
  filterIsChangedValue;
  constructor(private route: ActivatedRoute,public globals: globals,private translate: TranslateService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.route.params.subscribe(param => {
      this.filterIsChangedValue=param['filter'];
   });
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.filterIsChangedValue=param['filter'];
   });
  }

}
