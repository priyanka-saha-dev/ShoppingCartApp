import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { InventoryCart } from '../models/InventoryCart';
import { InventoryItem } from '../models/InventoryItem';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor(public http: Http) {
    console.log('AddToCartService Provider');
  }

  private serverApiURI = 'http://localhost:3000/shop/cart';

  public getHeaders(): Headers {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');

    return headers;
  }
  public getAllCartItems(): Observable<InventoryCart[]> {

    return this.http.get(this.serverApiURI)
      .pipe(map(res => res.json()));

  }

  public getCatItemByItemID(itemID: string): Observable<InventoryCart> {

    let itemURI = `${this.serverApiURI}/${itemID}`;
    console.log(itemURI);

    return this.http.get(this.serverApiURI)
      .pipe(map(res => res.json()));
  }

  public addCartItem(cartItem: InventoryItem): Observable<InventoryCart> {

    let newCartItem = JSON.stringify({
      itemID: cartItem._id,
      itemCategory: cartItem.category,
      itemQuantity: cartItem.selectedQuantity,
      itemDateOfAddition: Date.now
    });

    return this.http.post(this.serverApiURI, newCartItem, { headers: this.getHeaders() })
      .pipe(map(res => res.json()));
  }

  public deleteCartItem(itemID: string): Observable<InventoryCart> {

    let itemURI = `${this.serverApiURI}/${itemID}`;
    console.log(itemURI);

    return this.http.delete(itemURI, { headers: this.getHeaders() })
      .pipe(map(res => res.json()));

  }
}
