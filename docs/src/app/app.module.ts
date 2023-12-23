import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgScrollbarModule } from 'ngx-scrollbar';
import {HIGHLIGHTJS_CONFIG, HighlightJsConfig, HighlightJsModule} from 'ngx-highlight-js';
import { NzCardModule } from "ng-zorro-antd/card";
import { NzBadgeModule } from "ng-zorro-antd/badge";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HomeComponent } from './pages/home/home.component';
import { NZ_CONFIG, NzConfig } from 'ng-zorro-antd/core/config';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DocsComponent } from './pages/docs/docs.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GetAllProductsComponent } from './components/get-all-products/get-all-products.component';

registerLocaleData(en);

const ngZorroConfig: NzConfig = {
  message: { nzTop: 120 },
  notification: { nzTop: 240 },
  theme: {
    primaryColor: '#119c8c'
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocsComponent,
    NavBarComponent,
    GetAllProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzBadgeModule,
    FlexLayoutModule,
    NgScrollbarModule,
    HighlightJsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_CONFIG, useValue: ngZorroConfig },
    { 
      provide: HIGHLIGHTJS_CONFIG, 
      useValue: { 
        lang: 'html'
      } as HighlightJsConfig 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
