import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {Product} from "../entities/Product"

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() item:Product
@Output() selectItem =new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  select(item:string){
    this.selectItem.emit(item)
  }

}
