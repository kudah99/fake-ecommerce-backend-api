import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgScrollbarModule } from 'ngx-scrollbar';
import {HIGHLIGHTJS_CONFIG, HighlightJsConfig, HighlightJsDirective, HighlightJsModule} from 'ngx-highlight-js';
import { NzCardModule } from "ng-zorro-antd/card";
import { NzBadgeModule } from "ng-zorro-antd/badge";
import { NzTabsModule } from "ng-zorro-antd/tabs";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzToolTipModule } from "ng-zorro-antd/tooltip";
import { NzModalModule } from "ng-zorro-antd/modal";
import { NzAlertModule } from "ng-zorro-antd/alert";
import { NzSpinModule } from 'ng-zorro-antd/spin';

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
import { ExampleCardComponent } from './components/example-card/example-card.component';
import { GetProductByCategoryIdComponent } from './components/get-product-by-category-id/get-product-by-category-id.component';
import { GetProductsByIdComponent } from './components/get-products-by-id/get-products-by-id.component';
import { GetCategoryByIdComponent } from './components/get-category-by-id/get-category-by-id.component';
import { GetAllCategoriesComponent } from './components/get-all-categories/get-all-categories.component';
import { GetAllCartsComponent } from './components/get-all-carts/get-all-carts.component';
import { GetCartByIdComponent } from './components/get-cart-by-id/get-cart-by-id.component';

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
    GetAllProductsComponent,
    GetProductByCategoryIdComponent,
    GetProductsByIdComponent,
    GetCategoryByIdComponent,
    GetAllCategoriesComponent,
    GetAllCartsComponent,
    GetCartByIdComponent,
    ExampleCardComponent
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
    HighlightJsModule,
    HighlightJsDirective,
    NzTabsModule,
    NzButtonModule,
    NzAlertModule,
    NzModalModule,
    NzToolTipModule,
    NzSpinModule
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
