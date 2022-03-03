import { Component, OnInit } from '@angular/core';
import { Product } from '../IProduct';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: any[] = [];
  info: string = 'Witaj';
  currentItem = 'Television';
  headers = ['#', 'Name', 'Picture Url', 'Price', 'Description'];
  selectedProduct: Product | undefined;

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public onSelect(product: Product): void {
    this.selectedProduct = product;
    console.log('onSelect()' + product.id);
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(response => {
        this.products = response;
        console.log('Products: '+ JSON.stringify(this.products));
      });
  }

  deleteProduct(product : Product) {
    console.log('deleteProduct: '+ JSON.stringify(product));
    this.productService
      .deleteProduct(product)
      .subscribe(
        () => (this.products = this.products.filter((t) => t.id !== product.id))
        
      );
  }
}
