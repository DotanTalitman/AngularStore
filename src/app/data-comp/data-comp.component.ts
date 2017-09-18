import { Product } from './../entities/Product';
import { Http, Response } from '@angular/http';
import { Component } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-data-comp',
  templateUrl: './data-comp.component.html',
  styleUrls: ['./data-comp.component.css']
})
export class DataCompComponent {
  products:Product[];
  URL: string = "https://jbmd-store.azurewebsites.net/"
  getProductsWithPromise() {
    this.http
      .get(`${this.URL}products`)
      .toPromise()
      .then((res:Response)=>{
        
          this.products=res.json();
      },(err)=>{
          console.log(err);
      })
  }

  getData(){
    this.http.get("http://jbmd-store.azurewebsites.net/products")
    .subscribe((r)=>{
        
       this.products=r.json();
    })
    
    
  }


  getProdcutsWithObservable() {
    this.http
    .get(`${this.URL}products`)
    .subscribe((res:Response)=>{
      console.log("R",res.json())
       this.products=res.json();
   },(err)=>{
      console.log("err",err)
   })
  }

  getProdecutAndAddToPrice(){
    this.http
    .get(`${this.URL}products`)
    .map(data=>{
       var array:Product[]= data.json();
       return array.map(p=>{
        return new Product(p.id,p.title,p.price+=2,p.img,p.description);
       })
    })
    .subscribe(d=>{
      console.log(d)
    })
  }

  constructor(private http: Http) { }



}
