import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/Components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/Components/products-details/products-details.component';
import { CardComponent } from './cards/Components/card/card.component';
// import { HomeComponent } from './home/home.component';
// import { ProductsComponent } from './products/products.component';



const routes: Routes = [

//  {path:'',redirectTo:"Home",pathMatch:''}  //full بيروح للاسم كامل اللى مكتوب   لكن perfix  بيروح لاول حاجه يقابلها

  //  {path:'' ,redirectTo:"home",pathMatch:'full'},
  //  {path:'Home',component:HomeComponent},
  //  {path:'Products',component:ProductsComponent}
  //  {path:'**',component:NotFoundComponent}

  {path:'products',component:AllProductsComponent},
  {path:'details/:id',component:ProductsDetailsComponent},
  {path:'card',component:CardComponent},
  {path:'',redirectTo:'products',pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
