import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartproduct:any[] =[];
  total:any=0;
  success:boolean= false;
  constructor( private cartservice : CartService) { }

  ngOnInit(): void
  {
    this.getcartproducet();
  }

  getcartproducet()
  {
    if("cart" in localStorage)
    {
      this.cartproduct = JSON.parse(localStorage.getItem("cart")!);

    }
    this.gettotalprice();
}

gettotalprice()
{
  this.total=0;
  for( let x in this.cartproduct)
  {
     this.total += this.cartproduct[x].item.price * this.cartproduct[x].quantity;
  }
}
plusamount(index:number)
{
  this.cartproduct[index].quantity++
  this.gettotalprice()
  localStorage.setItem("cart",JSON.stringify(this.cartproduct))
}
minusamount(index:number)
{
  this.cartproduct[index].quantity--
  this.gettotalprice()
  localStorage.setItem("cart",JSON.stringify(this.cartproduct))
}
delteproducet(index:number)
{
  this.cartproduct.splice(index,1)
  localStorage.setItem("cart",JSON.stringify(this.cartproduct))
  this.gettotalprice()
}
deltecart()
{
  this.cartproduct=[];
  localStorage.setItem("cart",JSON.stringify(this.cartproduct))
  this.gettotalprice()

}
addproducet()
{
  let products = this.cartproduct.map(item=>{
     return {producetid:item.item.id , quantity:item.quantity}
  })
   let model =
   {
    userId:5,
    date: new Date(),
    products:products
   }
   this.cartservice.createnewcarte(model).subscribe(item=>
    {
       this.success = true ;
    })

}

}
