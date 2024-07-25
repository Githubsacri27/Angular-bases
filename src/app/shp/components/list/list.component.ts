import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'shp-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input()
  public productList: Product[] = [
    {
      name: 'Trunks',
      quantity: 100,
      price: 1000,
    },
  ];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteProduct(id?: string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }
}
