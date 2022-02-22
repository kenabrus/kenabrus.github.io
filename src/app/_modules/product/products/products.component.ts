import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  info: string = 'Witaj';

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(response => this.products = response);
    //console.log('products: ' + JSON.stringify(this.products));
  }

}
