import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-detalies-prodouct',
  templateUrl: './detalies-prodouct.component.html',
  styleUrls: ['./detalies-prodouct.component.css']
})
export class DetaliesProdouctComponent implements OnInit {
  id :any;
  data:any={};
  loading:boolean=false;
  constructor( private producetservice:ProductService , private route :ActivatedRoute) {
    this.id=  this.route.snapshot.paramMap.get("id");

    // console.log(this.id);
   }

  ngOnInit(): void {
     this.getdedtailproductet();
  }

  getdedtailproductet()
  {   this.loading=true;
    this.producetservice.getproducetbyid(this.id).subscribe(res=>{
      this.data=res;
      this.loading=false;
      console.log(this.data.title);
    });

  }



}
