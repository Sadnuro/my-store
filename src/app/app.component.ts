import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'my-store';
  inputValue:string = '';
  showImage:boolean = true;

  onLoaded(value: string){
    console.log('Parent log:', value);
  }

  toggleImage(){
    this.showImage = !this.showImage;
  }

}
