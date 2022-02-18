
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const productRoutes: Routes = [
  {
    path: 'productslist',
    children: [
      { path: '', component: ProductListComponent }
    ]
  }
];

export const ProductRouting = RouterModule.forChild(productRoutes);
