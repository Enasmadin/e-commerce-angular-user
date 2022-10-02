import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ProdutesModule } from './produtes/produtes.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   
    AppRoutingModule,
    SharedModule,
    ProdutesModule,
    CartModule,
    RouterModule,
    FormsModule,
    BrowserModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
