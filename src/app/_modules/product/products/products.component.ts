import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
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

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.getProducts();
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
