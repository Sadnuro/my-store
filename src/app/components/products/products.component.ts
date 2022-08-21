import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  total:number =0;
  myShoppingCart: Product[] = [];
  products: Product[] = [];
  today = new Date();           // Current date
  date = new Date(2021, 1, 21); // year | month | day

  constructor(
    private storeService:StoreService,
    private productService: ProductService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productService.getAllProducts()
      .subscribe(data => {
        this.products = data;
      });
  }

  onAddToShoppingCart(product: Product){
    console.log('added product:', product);
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
