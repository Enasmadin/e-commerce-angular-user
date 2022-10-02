import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetaliesProdouctComponent } from './componentes/detalies-prodouct/detalies-prodouct.component';
import { ProdutsComponent } from './componentes/produts/produts.component';
import { SharedModule } from '../shared/shared.module';
import { UniqueproducetComponent } from './componentes/uniqueproducet/uniqueproducet.component';
import {RouterModule} from '@angular/router';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
// import { FORM_DIRECTIVES }    from '@angular/forms';


@NgModule({
  declarations: [

    DetaliesProdouctComponent,
     ProdutsComponent,
     UniqueproducetComponent,





  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,


  ]
})
export class ProdutesModule { }
