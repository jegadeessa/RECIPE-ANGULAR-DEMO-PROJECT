import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ShoppingModule } from './modules/shopping/shopping.module';
import { ReceipeModule } from './modules/receipe/receipe.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ShoppingModule,
    ReceipeModule,
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
