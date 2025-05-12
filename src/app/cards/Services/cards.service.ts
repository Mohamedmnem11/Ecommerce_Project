import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http:HttpClient) { }


  createProduct(card:any){

   return this.http.post(environment.baseApi+'carts',card);
  }

}
