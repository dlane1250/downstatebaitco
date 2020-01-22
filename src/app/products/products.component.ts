
import { Component, Input } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})

export class ProductsComponent {
    title = "Products";
    viewMode = "icon";
    products;
    isActive = true;
    email;

    constructor (service: ProductsService) {
        this.products = service.getProducts();
    }

    onKeyUp() {
        console.log(this.email);
    }

    onSave($event) {
        $event.stopPropagation();
        //...
    }
}