import { Observable } from 'rxjs/Rx';
import { Http ,Response} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProdcutsService {

  prodcutsURL="https://jbmd-store.azurewebsites.net/products";
  getProdcuts():Observable<Response>{
     return this.http.get(this.prodcutsURL)
  }
 //
  constructor(private http:Http) { 
    
  }

}
