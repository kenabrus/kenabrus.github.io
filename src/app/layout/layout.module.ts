import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';

import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenubarModule } from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar'
import {RadioButtonModule} from 'primeng/radiobutton';


import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ConfigComponent } from './config/config.component';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    FooterComponent,
    ContentComponent,
    ConfigComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    TabMenuModule,
    InputTextModule,
    ButtonModule,
    RouterModule,
    DividerModule,
    StyleClassModule,
    ChartModule,
    PanelModule,
    SidebarModule,
    InputSwitchModule,
    RadioButtonModule,
    FormsModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
