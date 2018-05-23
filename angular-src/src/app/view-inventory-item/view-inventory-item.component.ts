import { Component, OnInit } from '@angular/core';

import { InventoryItem } from '../models/InventoryItem';
import { InventoryItemService } from '../services/inventory-item.service';


@Component({
  selector: 'app-view-inventory-item',
  templateUrl: './view-inventory-item.component.html',
  styleUrls: ['./view-inventory-item.component.css']
})
export class ViewInventoryItemComponent implements OnInit {

  constructor(private inventorySvc : InventoryItemService) { }
  private inventoryItem: InventoryItem[] = [];

  ngOnInit() {
    this.loadAllInventoryItems();
  }

  public loadAllInventoryItems() {
    this.inventorySvc.getAllInventoryItem('id').subscribe(
      response => {
        this.inventoryItem = response;
        //console.log(response);
      });
  }

  public loadInventoryItemByID(){

  }

  public onAddInventoryItem(newItem) {
    this.inventoryItem = this.inventoryItem.concat(newItem);
  }

  public deleteInventoryItem(item) {
    console.log('item id : ' + item._id);
    this.inventorySvc.deleteInventoryItem(item._id).subscribe(
      response => {
        console.log('item deleted');
        this.inventoryItem = this.inventoryItem.filter(items => items !== item);
      }
    );
  }
}


