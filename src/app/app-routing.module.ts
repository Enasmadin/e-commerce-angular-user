import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/componentes/cart/cart.component';
import { DetaliesProdouctComponent } from './produtes/componentes/detalies-prodouct/detalies-prodouct.component';

import { ProdutsComponent } from './produtes/componentes/produts/produts.component';
import { ProdutesModule } from './produtes/produtes.module';

const routes: Routes = [
  {path:"products" ,component:ProdutsComponent},
  {path:"detail/:id",component:DetaliesProdouctComponent},
  {path:"cart",component:CartComponent},
  {path:"**",redirectTo:"products" , pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
