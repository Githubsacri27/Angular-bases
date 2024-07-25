import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'shp-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  @Output()
  onNewProduct: EventEmitter<Product> = new EventEmitter();

  public product: Product = {
    name: '',
    quantity: 0,
    price: 0
  };
  emitProduct():void {
    if ( this.product.name.length === 0) return;
    this.onNewProduct.emit(this.product);
    this.product = {name:'', quantity: 0, price: 0};
    
  }

}
