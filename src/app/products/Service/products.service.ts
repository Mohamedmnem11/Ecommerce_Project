import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient ) {}

  getAllProducts():Observable<any>{
    return this._HttpClient.get('https://fakestoreapi.com/products');
  }
  getCategory():Observable<any>{
    return this._HttpClient.get('https://fakestoreapi.com/products/categories');
  }
  getFilterCat(value:string):Observable<any>{
    return this._HttpClient.get('https://fakestoreapi.com/products/category/'+ value);
  }


  getProdId(id:string):Observable<any>{
    return this._HttpClient.get('https://fakestoreapi.com/products/'+id);
  }





}
