import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { RouterModule } from '@angular/router';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import {
  AutocompleteComponent,
  ButtonComponent,
  CarouselComponent,
  MenuComponent,
  ProgressComponent,
  SelectComponent,
  SlideshowComponent
} from './src';

const components = [
  SlideshowComponent,
  ButtonComponent,
  ProgressComponent,
  CarouselComponent,
  AutocompleteComponent,
  MenuComponent,
  SelectComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    IvyCarouselModule,
    PinchZoomModule,
    CommonModule,
    MatProgressBarModule,
    RouterModule,
    AutocompleteLibModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, './assets/dictionary/', '.json');
        },
        deps: [HttpClient],
      },
    }),
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
  exports: [...components],
})
export class WidgetModule { }
