import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CardComponent } from './Components/card/card.component';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    NgFor
  ],
  exports:[CardComponent]
})
export class CardsModule { }
