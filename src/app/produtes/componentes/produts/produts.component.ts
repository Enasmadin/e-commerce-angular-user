import { Component, OnInit } from '@angular/core';
import { Productes } from 'modes/productes';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-produts',
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.css']
})
export class ProdutsComponent implements OnInit {
  productes:Productes[]=[];
  catogary: any[]=[];
  loading:boolean= false;
  addproduct: any[] =[];
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.getproductes();
    this.getcatogray();
  }
  getproductes()
  {
    this.loading=true;
    this.service.getallproductes().subscribe((res:any)=>{
    this.productes=res;
    this.loading=false;

    },Error=>{
      alert('error')
    })
  }

  getcatogray()
  {
    this.loading= true ;
    this.service.getallcatogary().subscribe((res:any)=>{
      this.catogary=res;
      this.loading=false;
    },Error=>{
      alert('error')
    })
  }
  filtercatogery(event:any)
  {

    let value = event.target.value;
     console.log(value);
    (value=="all")? this.service.getallproductes : this.getproducetcatogary(value);


  }
  getproducetcatogary(keyword:string)
  {
      this.loading= true ;
    this.service.getprodbycatogary(keyword).subscribe((res:any)=>{
       this.productes=res;
       this.loading= false ;
      console.log(this.productes)
    })
  }

  addtocart(event:any)
  {
    console.log(event);
    if('cart' in localStorage)
    {
      this.addproduct = JSON.parse(localStorage.getItem("cart")!)
      let exist= this.addproduct.find(item=>item.item.id== event.item.id)
      if (exist)
      {
        alert("this is product add alerady")
      }
      else
      this.addproduct.push(event)
      localStorage.setItem("cart",JSON.stringify(this.addproduct))
    }
    else
    {
      this.addproduct.push(event)
      localStorage.setItem("cart",JSON.stringify(this.addproduct))
    }

  }

  }


