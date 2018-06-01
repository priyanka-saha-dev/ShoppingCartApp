import { Component, OnInit, Input } from '@angular/core';

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
  private theInventoryItem: InventoryItem;

  @Input() activeAddInventoryItem : boolean = false;
  @Input() activeEditInventoryItem : boolean = false;

  ngOnInit() {
    this.loadAllInventoryItems();
    this.activeAddInventoryItem = false;
    this.activeEditInventoryItem = false;
  }

  public reinitItem(){
    this.theInventoryItem = {
      title : '',
      description: '',
      category : '',
      quantity : 0,
      expiry : new Date(),
      choice : false
    }
    this.activeAddInventoryItem = false;
    this.activeEditInventoryItem = false;
    //this.active = true;
  }

  public loadAllInventoryItems() {
    this.inventorySvc.getAllInventoryItem().subscribe(
      response => {
        this.inventoryItem = response;
        //console.log(response);
      });
  }

  public onAddInventoryItem(newItem) {
    this.inventoryItem = this.inventoryItem.concat(newItem);
    this.activeAddInventoryItem = false;
    this.activeEditInventoryItem = false;
  }

  //Yet to implement
  public onEditInventoryItem(newItem) {
    //this.inventoryItem = this.inventoryItem.concat(newItem);
    this.activeAddInventoryItem = false;
    this.activeEditInventoryItem = false;
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

  public addInventoryItem(){
    console.log('add clicked');
    this.activeAddInventoryItem = !this.activeAddInventoryItem;
    //this.activeEditInventoryItem = false;
  }

  public updateInventoryItem(action, item){
    if(action === 'add'){
      this.addInventoryItem();
    } else if(action === 'edit' && item){
      this.editInventoryItem(item);
    }
  }

  public editInventoryItem(item){
    console.log('edit clicked for : ' + item);
    this.theInventoryItem = item;

    this.activeEditInventoryItem = !this.activeEditInventoryItem;
    //this.activeAddInventoryItem = false;
  }
}


