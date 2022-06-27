import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from '@bc/guards/auth-guard.service'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleLoginProvider } from 'angularx-social-login';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { SharedModule } from '../shared/shared.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { WidgetModule } from '@bc/widget/widget.module';

import {
  ProductComponent,
  BasketComponent,
  LoginComponent
} from './components';


const components = [
  ProductComponent,
  BasketComponent,
  LoginComponent
]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    MatChipsModule,
    MatIconModule,
    WidgetModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    SocialLoginModule,
    TranslateModule.forChild(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (http: HttpClient) => {
            return new TranslateHttpLoader(http, './assets/dictionary/', '.json')
          },
          deps: [HttpClient]
        }
      }
    ),
  ],
  providers: [
    AuthGuardService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '274228121469-4chlvbgksve7j50l77d939a1e22hh8sa.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }

  ],
  exports: [
    ...components
  ],
  bootstrap: []
})
export class LazyModule { }
