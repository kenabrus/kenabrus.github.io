import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductRouting } from './product.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductItemComponent } from './product-item/product-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { AppMaterialModule } from 'src/app/app.material.module';



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
    FormsModule,
    AppMaterialModule
  ],
  providers: [
    ProductService 
  ],
})
export class ProductModule { }
