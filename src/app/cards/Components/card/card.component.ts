import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../Services/cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  total:number=0;
  cardProduct:any[]=[];

  success:boolean=false;
  constructor(private service:CardsService){}

  ngOnInit(): void {
    this.getCard();
    this.getCardTotal();
  }
  getCard(){
    if("card" in localStorage){
      this.cardProduct=JSON.parse(localStorage.getItem('card')!);

    }
    console.log(this.cardProduct);
  }

  getCardTotal(){
    this.total=0;
    for(let num in this.cardProduct){
      this.total+=this.cardProduct[num].item.price*this.cardProduct[num].quantity;
    }
  }

  getMinus(index:number){
    this.cardProduct[index].quantity--;
    this.updateStorage();
  }

  getPlus(index:number){
    this.cardProduct[index].quantity++;
    this.updateStorage()
  }

  updateStorage(){
    localStorage.setItem('card',JSON.stringify(this.cardProduct));
    this.getCardTotal();
  }

  deleteItems(index:number){

    this.cardProduct.splice(index,1);
    this.updateStorage();
  }
  clear(){
    this.cardProduct=[];
    this.updateStorage();
  }



  addCard(){
    let products=this.cardProduct.map(card=>{
      return {productId :card.item.id,quantity:card.quantity}
    })
    let model={
      userId:5,
      date:new Date(),
      products:[products]
    }
    this.service.createProduct(model).subscribe(res =>{
      this.success=true;
    })
    console.log(model);
  }




}
