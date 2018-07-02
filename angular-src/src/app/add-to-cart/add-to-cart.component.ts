import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { InventoryItem } from '../models/InventoryItem';
import { InventoryItemService } from '../services/inventory-item.service';

@Component({
    selector: 'app-add-to-cart',
    templateUrl: './add-to-cart.component.html',
    styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

    @Input() listOfInventoryItem: InventoryItem[];
    inventoryItems : InventoryItem[] = [];

    constructor(
        private inventorySvc : InventoryItemService
      ) { }
    
    ngOnInit() { }

    public addToCartInventoryItem(){
        this.listOfInventoryItem.forEach(item => {
            if(item.choice && item.selectedQuantity <= item.quantity) {
                this.inventoryItems.push(item);
            }
        });
        
        if(this.inventoryItems && this.inventoryItems.length > 0){
            console.log(this.inventoryItems);
        }
    }
}