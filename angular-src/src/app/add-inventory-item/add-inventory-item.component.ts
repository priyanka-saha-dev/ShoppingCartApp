import { Component, OnInit } from '@angular/core';

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
        if(response.success){
          console.log('Item Added');
          
        }
      });
  }
}
