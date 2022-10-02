import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componentes/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SpinnerComponent } from './componentes/spinner/spinner.component';
import { SelectComponent } from './componentes/select/select.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule ,
    BrowserModule,
    FormsModule




  ],
  exports:[
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    FormsModule,
    
  ]
})
export class SharedModule { }
