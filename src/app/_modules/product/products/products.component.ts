import { Component, OnInit } from '@angular/core';
import { Product } from '../IProduct';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

import { ProductService } from '../product.service';
import { ProductItemComponent } from '../product-item/product-item.component';

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
    // this.matDialogRef = this.matDialog.open(ProductItemComponent, {
    //   data: { product: product },
    //   disableClose: true
    // });

    // this.matDialogRef.afterClosed().subscribe(res => {
    //   if ((res == true)) {
    //     // this.name = "";
    //     console.log('matDialogRef.afterClosed()');
    //   }
    // });
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
