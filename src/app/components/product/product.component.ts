import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product = new Product();
  @Output() addedProduct:EventEmitter<Product> = new EventEmitter<Product>();
  constructor() { }

  onAddToCart(){
    this.addedProduct.emit(this.product);
  }

}
