import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarsModule } from 'src/_modules/cars/cars.module';
import { IdentityModule } from 'src/_modules/identity/identity.module';
import { UsersModule } from 'src/_modules/users/users.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IdentityModule,
    UsersModule,
    CarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
