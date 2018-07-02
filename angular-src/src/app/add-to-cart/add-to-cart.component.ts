import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { InventoryItem } from '../models/InventoryItem';
import { InventoryItemService } from '../services/inventory-item.service';
import { AddToCartService } from '../services/add-to-cart.service';

@Component({
    selector: 'app-add-to-cart',
    templateUrl: './add-to-cart.component.html',
    styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

    @Input() listOfInventoryItem: InventoryItem[];
    inventoryItems: InventoryItem[] = [];

    constructor(
        private inventorySvc: InventoryItemService,
        private addToCartSvc: AddToCartService
    ) { }

    ngOnInit() { }

    public addToCartInventoryItem() {
        this.listOfInventoryItem.forEach(item => {
            if (item.choice && item.selectedQuantity <= item.quantity) {
                this.inventoryItems.push(item);

                this.addToCartSvc.addCartItem(item).subscribe(
                    response => {
                        console.log(`${item.selectedQuantity} number of item(s) added to cart for ${item._id}`);
                    }
                );
            }
        });

    }
}