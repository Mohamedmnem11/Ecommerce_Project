import { Input, input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './light-box.directive';
import { ReversePipe } from './reverse.pipe';
import { SharedModule } from './shared/shared.module';
import {  HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from './products/Components/all-products/all-products.component';
import { ProductComponent } from './products/Components/product/product.component';
import { ProductsDetailsComponent } from './products/Components/products-details/products-details.component';
import { CardComponent } from './cards/Components/card/card.component';
// import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    LightBoxDirective,
    ReversePipe,
    ProductComponent,
    ProductsDetailsComponent,

    CardComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    // FormsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
