import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { LOCALE_ID } from '@angular/core';
import  locale_pt  from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/register/components/header/header.component';
import { SellerFormComponent } from './pages/register/components/seller-form/seller-form.component';
import { SellerListComponent } from './pages/register/components/sellers-list/sellers-list.component';
import { SellerTableComponent } from './pages/register/components/sellers-table/sellers-table.component';
import { registerLocaleData } from '@angular/common';
import { EmptyTableMsgComponent } from './pages/register/components/empty-table-msg/empty-table-msg.component';
import { NgxMaskModule } from 'ngx-mask';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { GenderChartComponent } from './pages/home/charts/gender-chart/gender-chart.component';

registerLocaleData(locale_pt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SellerFormComponent,
    SellerListComponent,
    SellerTableComponent,
    EmptyTableMsgComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    GenderChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }