import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCart: Product[] = [];
  private products: Product[] = [];

  constructor() { }

  addProduct(product:Product){
    this.myShoppingCart.push(product);
  }

  getTotal(){
    return this.myShoppingCart.reduce( (sum, item) => sum + item.price, 0 );
  }

  getShoppingCart(){
    return this.myShoppingCart;
  }

  getProducts(){
    return this.products;
  }
}
