import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'my-store';
  // inputValue:string = '';

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

  onLoaded(value: string){
    console.log('Parent log:', value);
  }
}
