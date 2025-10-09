import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LOCALE_ID } from '@angular/core';
import  locale_pt  from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SellerFormComponent } from './components/seller-form/seller-form.component';
import { SellerListComponent } from './components/seller-list/seller-list.component';
import { SellerTableComponent } from './components/seller-table/seller-table.component';
import { registerLocaleData } from '@angular/common';
import { EmptyTableMsgComponent } from './components/empty-table-msg/empty-table-msg.component';

registerLocaleData(locale_pt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SellerFormComponent,
    SellerListComponent,
    SellerTableComponent,
    EmptyTableMsgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
