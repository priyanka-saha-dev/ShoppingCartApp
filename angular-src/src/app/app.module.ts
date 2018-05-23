import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { AddInventoryItemComponent } from './add-inventory-item/add-inventory-item.component';
import { ViewInventoryItemComponent } from './view-inventory-item/view-inventory-item.component';
import { InventoryItemService } from './services/inventory-item.service';


@NgModule({
  declarations: [
    AppComponent,
    AddInventoryItemComponent,
    ViewInventoryItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    InventoryItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
