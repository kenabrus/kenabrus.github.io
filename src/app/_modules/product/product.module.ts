import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductRouting } from './product.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductItemComponent } from './product-item/product-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    ProductRouting,
    HttpClientModule,
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class ProductModule { }
