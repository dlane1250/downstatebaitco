import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from './product-model';
import { ProductsService } from '../common/services/products.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

    products: Product[] = [];
    private productsSub: Subscription;

    constructor (public service: ProductsService) { }

    ngOnInit() {
      this.service.getProducts();
      this.productsSub = this.service.getProductUpdateListener()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  onDelete(productId: string) {
    this.service.deleteProduct(productId);
  }

  ngOnDestroy() {
    this.productsSub.unsubscribe();
  }
}
