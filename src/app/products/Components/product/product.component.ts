import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  showButton:boolean=false;
  datanum:number=0

  @Input() ProdItem:any;

  @Output() item=new EventEmitter();
  Add(){

    this.showButton=!this.showButton;
   // console.log(this.ProdItem);
   if(this.datanum>0){
    this.item.emit({item:this.ProdItem,quantity:this.datanum});
    console.log("KKKKKKKKKKKKKKK")

   }

  }

}
