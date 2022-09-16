import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
