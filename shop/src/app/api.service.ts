import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  data:any = []

  constructor(public hc:HttpClient) { 
  }
  getData(){
    return this.hc.get("https://fakestoreapi.com/products")
  }
}
