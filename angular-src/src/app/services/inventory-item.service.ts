import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { Observable } from 'rxjs';
import { InventoryItem } from '../models/InventoryItem';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryItemService {

  constructor(public http: Http) { 
    console.log('InventoryItemService Provider');
  }

  private serverApiURI = 'http://localhost:3000/shop/inventory';

  public getAllInventoryItem(itemID) : Observable<InventoryItem[]>{

    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    
    //if(itemID){

    //} else {
      
      return this.http.get(this.serverApiURI)
                 .pipe(map( res => res.json()));
    //}
  }

  public addInventoryItem(newItem: InventoryItem) {
    
    let newItemRequest = JSON.stringify({ 
      title: newItem.title, 
      description: newItem.description, 
      category: newItem.category,
      quantity : newItem.quantity,
      expiry : new Date(newItem.expiry)
    });

    console.log(newItemRequest);

    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    
    return this.http.post(this.serverApiURI, newItemRequest , {headers: headers})
               .pipe(map( res => res.json()));
  }

  public deleteInventoryItem(itemID : string) {
    
    let itemURI = `${this.serverApiURI}/${itemID}`;
    console.log(itemURI);

    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    
    return this.http.delete(itemURI, {headers: headers})
               .pipe(map( res => res.json()));
  }
}