import { Component } from '@angular/core';
import { shpService } from '../services/shp.service';
import { Product } from '../interfaces/product.interface';

@Component({
    selector: 'app-shp-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
})

export class MainPageComponent{
    constructor(private shpService: shpService){}

    get products(): Product[]{
        return [...this.shpService.products];
    }

    onDeleteProduct(id: string):void{
        this.shpService.onDeleteProductById(id);
    }

    onNewProduct(product: Product):void{
        this.shpService.addProduct(product);
    }
}