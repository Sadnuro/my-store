import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
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

}
