
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const productRoutes: Routes = [
  {
    path: 'products',
    children: [
      { path: '', component: ProductsComponent }
    ]
  }
];

export const ProductRouting = RouterModule.forChild(productRoutes);
