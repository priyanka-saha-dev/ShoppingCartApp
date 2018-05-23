
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { InventoryItem } from '../models/InventoryItem';
import { InventoryItemService } from '../services/inventory-item.service';

@Component({
  selector: 'app-add-inventory-item',
  templateUrl: './add-inventory-item.component.html',
  styleUrls: ['./add-inventory-item.component.css']
})
export class AddInventoryItemComponent implements OnInit {

  private newItem: InventoryItem;
  constructor(private inventorySvc : InventoryItemService) { }
  @Output() addInventoryItem: EventEmitter<InventoryItem> = new EventEmitter<InventoryItem>();

  ngOnInit() {
    this.reinitItem();
  }

  public reinitItem(){
    this.newItem = {
      title : '',
      description: '',
      category : '',
      quantity : 0,
      expiry : new Date()
    }
  }

  public onSubmit(){
    this.inventorySvc.addInventoryItem(this.newItem).subscribe(
      response => {
        //console.log('response.success' + response.status);
        //if(response.success){
          console.log('Item Added');
          this.addInventoryItem.emit(this.newItem);
        //}
      });
  }
}
