import { Component , OnInit } from '@angular/core';
import { ProductsService } from '../../Service/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit {

  products:any[]=[];
  categories:any=[];

  arrItem:any[]=[];
  constructor(private _Productservice:ProductsService){ }




  getProduct(){
    this._Productservice.getAllProducts().subscribe({
      next:(res)=>{

        console.log(res);
        this.products=res;
        // console.log(this.products)
      },
      error:(error)=>{

        alert('error'+error.message);

      }
    })
  }



  ngOnInit(): void {
    // console.log("Products: ", this.products);
    this.getProduct();
    // console.log("Products: ", this.products);
    this.getCategories();
  }


  getCategories(){
    this._Productservice.getCategory().subscribe(
      (res)=>{
        console.log(res);
        this.categories=res;
      },
      (error)=>{
        alert("error");
      }

    )
  }

  filtirCategory(event:any){
    let value=event.target.value;

    console.log(value);
    if(value!='all'){
    this._Productservice.getFilterCat(value).subscribe(
      (res)=>{
        console.log(res);
        this.products=res;
      }
    )
    }
  else{
    this.getProduct();
  }

  }

  // addEvent(event:any){
  //   {
  //     this.arrItem=JSON.parse(localStorage.getItem('card')!);
  //     let exist=this.arrItem.find(item=>item.id==event.id);
  //     if(!exist){

  //     this.arrItem.push(event);
  //     localStorage.setItem('card',JSON.stringify(event));
  //     console.log(event);
  //     }
  //   }
  //   else{
  //     this.arrItem.push(event);
  //     localStorage.setItem('card',JSON.stringify(event));
  //     console.log(event);
  //   }
  // }

  addEvent(event: any) {
    // استرجاع العناصر من localStorage أو تعيين مصفوفة فارغة
    this.arrItem = JSON.parse(localStorage.getItem('card') || '[]');

    // التحقق مما إذا كان العنصر موجودًا بالفعل
    let exist = this.arrItem.find((item: any) => item.item.id === event.item.id);
    if (!exist) {
      // إضافة العنصر الجديد إلى المصفوفة
      this.arrItem.push(event);

      // تخزين المصفوفة الكاملة داخل localStorage
      localStorage.setItem('card', JSON.stringify(this.arrItem));
    }

    console.log(event);


    console.log("wwwwwwwwwwww")
  }



}


