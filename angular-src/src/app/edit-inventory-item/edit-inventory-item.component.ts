import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { InventoryItem } from '../models/InventoryItem';
import { InventoryItemService } from '../services/inventory-item.service';

@Component({
  selector: 'app-edit-inventory-item',
  templateUrl: './edit-inventory-item.component.html',
  styleUrls: ['./edit-inventory-item.component.css']
})
export class EditInventoryItemComponent implements OnInit {

  //private inventoryItem: InventoryItem;
  @Input() inventoryItem: InventoryItem;

  constructor(
    private route : ActivatedRoute,
    private inventorySvc : InventoryItemService
  ) { }

  ngOnInit() {
    this.loadInventoryItemByID();
  }
  

  public loadInventoryItemByID(){
    console.log('loading item : ' + this.inventoryItem);

    // const itemID = this.route.snapshot.paramMap.get('id');

    // this.inventorySvc.getInventoryItemByID(itemID).subscribe(
    //   response => {
    //     this.inventoryItem = response;
    //     //console.log(response);
    //   });
    }
}
