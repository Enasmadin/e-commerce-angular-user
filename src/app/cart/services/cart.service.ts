import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private http: HttpClient) { }
  createnewcarte(Model:any)
  {
     return this.http.post(environment.baseApi + "carts" ,Model);
  }
}
