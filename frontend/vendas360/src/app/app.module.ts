import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SellerFormComponent } from './components/seller-form/seller-form.component';
import { SellerListComponent } from './components/seller-list/seller-list.component';
import { SellerTableComponent } from './components/seller-table/seller-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SellerFormComponent,
    SellerListComponent,
    SellerTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
