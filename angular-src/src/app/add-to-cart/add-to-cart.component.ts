import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { InventoryItem } from '../models/InventoryItem';
import { InventoryItemService } from '../services/inventory-item.service';

@Component({
    selector: 'app-add-to-cart',
    templateUrl: './add-to-cart.component.html',
    styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

    @Input() inventoryItem: InventoryItem[];
    
    ngOnInit() { 
        console.log(this.inventoryItem);
    }
}