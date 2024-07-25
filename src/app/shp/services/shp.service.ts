import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class shpService {
  public products: Product[] = [
    {
      id: uuid(),
      name: 'Naranjas',
      quantity: 10,
      price: 10,
    },
    {
      id: uuid(),
      name: 'Peras',
      quantity: 9,
      price: 9,
    },
    {
      id: uuid(),
      name: 'Manzanas',
      quantity: 7,
      price: 7,
    },
  ];

  addProduct(product: Product): void {

    const newProduct: Product = {id: uuid(), ...product};
    this.products.push(newProduct);
  }


  onDeleteProductById(id: string) {
    this.products = this.products.filter(product => product.id !== id);
  }
}
