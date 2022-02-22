import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app.material.module';
import { NavComponent } from './_components/nav/nav.component';
import { ContentComponent } from './_components/content/content.component';
import { FooterComponent } from './_components/footer/footer.component';
import { HomeComponent } from './_components/home/home.component';
import { LayoutComponent } from './_components/layout/layout.component';
import { HeaderComponent } from './_components/header/header.component';
import { MediaQueryStatusComponent } from './_utils/media-query-status/media-query-status.component';
import { ProductModule } from './_modules/product/product.module';
import { UserModule } from './_modules/user/user.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    MediaQueryStatusComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ProductModule,
    UserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
