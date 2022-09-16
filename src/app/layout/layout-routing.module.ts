import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: LayoutComponent },
    { path: 'menu', component: MenuComponent }
    ])],
  exports: [RouterModule]
  })
export class LayoutRoutingModule { }
