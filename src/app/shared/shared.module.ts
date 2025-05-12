import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Component/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './Component/spinner/spinner.component';
import { SelectorComponent } from './Component/selector/selector.component';
import { FormsModule } from '@angular/forms';
// import { HttpClientJsonpModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectorComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    SpinnerComponent,
    SelectorComponent
  ]
})
export class SharedModule { }
