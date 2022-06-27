import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';

import { ApiService } from '@services/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazyModule } from '@bc/modules/lazy/lazy';
import { MasterModule } from '@bc/modules/core/master.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon'
import { MatChipsModule } from '@angular/material/chips'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { WidgetModule } from '@bc/widget/widget.module';
import { loginReducer } from '@bc/state/reducers/user.reducer';
import { StoreModule } from '@ngrx/store';
import { AuthGuardService } from '@bc/guards/auth-guard.service'
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/effects/user.effect';

export const DEVICE_WIDTH = new InjectionToken<string>('DEVICE_WIDTH');
export const DEVICE_TYPE_IS_PC = new InjectionToken<string>('DEVICE_TYPE_IS_PC');
export function detectDevice(width): boolean {
  return width < 1025 ? false : true;
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    MasterModule,
    MatChipsModule,
    MatIconModule,
    LazyModule,
    WidgetModule,
    MatProgressBarModule,
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot({ userReducer: loginReducer }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http, './assets/dictionary/', '.json');
        },
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    ApiService,
    AuthGuardService,
    { provide: DEVICE_WIDTH, useValue: window.screen.width },
    {
      provide: DEVICE_TYPE_IS_PC,
      useFactory: detectDevice,
      deps: [DEVICE_WIDTH],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
