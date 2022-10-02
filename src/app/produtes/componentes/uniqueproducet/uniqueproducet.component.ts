import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Productes } from 'modes/productes';

@Component({
  selector: 'app-uniqueproducet',
  templateUrl: './uniqueproducet.component.html',
  styleUrls: ['./uniqueproducet.component.css']
})
export class UniqueproducetComponent implements OnInit {

  constructor() { }
  @Input() data!:Productes;
  @Output() item  =  new EventEmitter();
  addbutton:boolean=false;
  amount:number=0;

  ngOnInit(): void
  {

  }

  add()
  {
    this.item.emit({item:this.data  , quantity: this.amount});

  }
}
