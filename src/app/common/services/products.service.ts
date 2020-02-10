import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Product } from '../../product-list/product-model';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})

export class ProductsService {

    products: Product[] = [];
    private productsUpdated = new Subject<Product[]>();

    constructor(private http: HttpClient) {};

    getProducts() {
        this.http
            .get<{products: any}>('http://localhost:3000/products')
            .pipe(map((productData) => {
                return productData.products.map(product => {
                    return {
                        id: product._id,
                        title: product.title,
                        img: product.img,
                        price: product.price,
                        quantity: product.quantity,
                        description: product.description
                    };
                });
            }))
            .subscribe((transformedProducts) => {
                this.products = transformedProducts;
                this.productsUpdated.next([...this.products]);
            });
    }

    getProductUpdateListener() {
        return this.productsUpdated.asObservable();
      }

    addProduct(title: string, img: any, price: number, quantity: number, description: string) {
        const product: Product = {
            id: null,
            title: title,
            img: img,
            price: price,
            quantity: quantity,
            description: description
        };
        this.http.post<{ productId: string }>('http://localhost:3000/products', product)
            .subscribe((responseData) => {
                const id = responseData.productId;
                product.id = id;
                this.products.push(product);
                this.productsUpdated.next([...this.products]);
            });
    }

    deleteProduct(productId: string) {
        this.http.delete("http://localhost:3000/products/" + productId)
          .subscribe(() => {
            const updatedProducts = this.products.filter(product => product.id !== productId);
            this.products = updatedProducts;
            this.productsUpdated.next([...this.products]);
        });
      }
}