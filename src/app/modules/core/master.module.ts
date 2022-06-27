import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { globals } from '../../global-variables'
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material/icon'
import { MatChipsModule } from '@angular/material/chips'
import { NgxPaginationModule } from 'ngx-pagination'
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader'
import { WidgetModule } from '@bc/widget/widget.module'

import {
  ContactComponent,
  FilterComponent,
  FooterComponent,
  HeaderComponent,
  MainComponent,
  ParentComponent,
  ThumbnailComponent,
  WishlistComponent
} from './components';

const components = [
  ContactComponent,
  FilterComponent,
  FooterComponent,
  HeaderComponent,
  MainComponent,
  ParentComponent,
  ThumbnailComponent,
  WishlistComponent
]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    WidgetModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    NgxSliderModule,
    NgxPaginationModule,
    RouterModule.forChild([]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, './assets/dictionary/', '.json')
        },
        deps: [HttpClient],
      },
    }),
  ],
  exports: [...components],
  providers: [globals],
  bootstrap: [],
})
export class MasterModule { }
