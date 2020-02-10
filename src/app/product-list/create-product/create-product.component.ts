import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProductsService } from '../../common/services/products.service';

@Component({
  selector: 'create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})

export class CreateProductComponent {
  title = "";
  img = "";
  price = 0;
  quantity = 0;
  description = "";
  
  constructor(public service: ProductsService) { }

  addProduct(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.service.addProduct(
      form.value.title,
      form.value.img,
      form.value.price,
      form.value.quantity,
      form.value.description);

    form.resetForm();
  }
}
