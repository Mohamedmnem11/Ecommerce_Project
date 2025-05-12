import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../Service/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.css'
})
export class ProductsDetailsComponent implements OnInit {


  id:any;
  products:any;

  constructor(private Route:ActivatedRoute,private service:ProductsService){

    this.id=this.Route.snapshot.paramMap.get('id')
    console.log(this.id);

  //   this.Route.paramMap.subscribe(params => {
  //     this.id = params.get('id');
  //     console.log(this.id);


  // })

  }
  ngOnInit(): void {

    this.getProductsid();
  }


  getProductsid(){
    this.service.getProdId(this.id).subscribe((res)=>{
      console.log(res);
      this.products=res;
    })
  }





}
