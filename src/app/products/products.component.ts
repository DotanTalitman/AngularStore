import { ProdcutsService } from './../services/prodcuts.service';
import { LoggerService } from './../services/logger.service';
import { Product } from './../entities/Product';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [LoggerService,ProdcutsService]
})
export class ProductsComponent implements OnInit {
//
  productsObservable: Observable<Response>;
  products: Array<Product> = new Array<Product>();

  constructor(private http: Http,
    private logger: LoggerService,private prodcutsService:ProdcutsService) {
    logger.print("dotan");

    logger.printWithHello("dotan");
    // this.addProdcut(1,
    //   "Galaxy S6 ",
    //   "Black Samsung Galaxy S6 (SM-G920V) 32GB Unlocked Smartphone",
    //   800,"galaxy6.jpg");
    // this.addProdcut(2,
    //   "Galaxy S7 ",
    //   "Samsung Galaxy S7 Edge 32 GB Gold (SM-G935F, 5,5 Zoll, 13 MP",
    //   1000,"galaxy7.jpg");
    // this.addProdcut(3,
    //   "Galaxy Note 5 ",
    //   "Samsung Galaxy Note 5 /Note 4/S5-32/16GB-White Gold Blue Unlocke",
    //   900,"note5.jpg")

    // this.productsObservable = this
    //   .http
    //   .get("https://jbmd-store.azurewebsites.net/products")


    // var promise = this.http
    //   .get("https://jbmd-store.azurewebsites.net/products")
    //   .toPromise();

    //   promise.then((res)=>{
    //       console.log("http call ended");
    //       this.products= res.json();

    //   },(err)=>{

    //   })
    //   console.log("line 42")



    // this.http.get("https://jbmd-store.azurewebsites.net/products")
    //   .toPromise()
    //   .then((res: Response) => {
    //     this.products = res.json();
    //   })
  }

  ngOnInit() {
  }

  selectedProduct;

  getItem(item) {
    this.selectedProduct = item;

  }

  getItems() {
    // this.productsObservable
    //   .subscribe((r: Response) => {
    //     this.products = r.json();
    //   })
    this.prodcutsService
    .getProdcuts()
    .subscribe(this.getDataFromResponse.bind(this))
  }


  getDataFromResponse(res:Response){
    console.log("this",this)
    this.products= res.json();
  }


  addProdcut(id, title, desc, price, img): void {

    var product = new Product(id, title, price, img, desc)
    this.products.push(product);
  }


}
