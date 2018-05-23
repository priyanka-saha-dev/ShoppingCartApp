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

}
