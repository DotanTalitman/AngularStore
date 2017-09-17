import { Component, OnInit } from '@angular/core';

import { Product } from "../entities/Product"
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product> = new Array<Product>();

  constructor() {
    this.addProdcut(1,
      "Galaxy S6 ",
      "Black Samsung Galaxy S6 (SM-G920V) 32GB Unlocked Smartphone",
      800,"galaxy6.jpg");
    this.addProdcut(2,
      "Galaxy S7 ",
      "Samsung Galaxy S7 Edge 32 GB Gold (SM-G935F, 5,5 Zoll, 13 MP",
      1000,"galaxy7.jpg");
    this.addProdcut(3,
      "Galaxy Note 5 ",
      "Samsung Galaxy Note 5 /Note 4/S5-32/16GB-White Gold Blue Unlocke",
      900,"note5.jpg")
  }

  ngOnInit() {
  }
  
  selectedProduct;

  getItem(item){
    this.selectedProduct=item;
  }
  

  addProdcut(id, title, desc, price,img): void {
  
    var product = new Product(id, title, price, img, desc)
    this.products.push(product);
  }


}
