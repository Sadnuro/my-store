import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  total:number = 0;
  myShoppingCart: Product[] = [];
  products: Product[] = [
    {
      id: '1',
      name: 'Kick',
      price: 1000,
      image: '../../../assets/images/kick.png'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: '../../../assets/images/bici.png'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: '../../../assets/images/angular.png'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: '../../../assets/images/gneric-bici.png'
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

  onAddToShoppingCart(product: Product){
    console.log('added product:', product);
    this.myShoppingCart.push(product);
    // (acumulador, elemento del array) => acumulador + atributo a sumar, valor inicial de acumulador
    this.total = this.myShoppingCart.reduce( (sum, item) => sum + item.price, 0 );
  }

}
