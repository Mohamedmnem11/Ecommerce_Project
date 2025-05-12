import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgTemplateOutlet } from '@angular/common';
import { AllProductsComponent } from './Components/all-products/all-products.component';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './Components/product/product.component';
// import { SelectorComponent } from '../shared/Component/selector/selector.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgFor,
    FormsModule,
    SharedModule

  ],
  exports:[
    AllProductsComponent,
    ProductsDetailsComponent
  ]
})
export class ProductsModule { }
