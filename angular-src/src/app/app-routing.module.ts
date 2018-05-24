import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddInventoryItemComponent } from './add-inventory-item/add-inventory-item.component';
import { ViewInventoryItemComponent } from './view-inventory-item/view-inventory-item.component';
import { EditInventoryItemComponent } from './edit-inventory-item/edit-inventory-item.component';

const routes : Routes = [
  {path : '', redirectTo : '/inventory', pathMatch : 'full'},
  {path : 'inventory', component : ViewInventoryItemComponent},
  {path : 'inventory/add', component : ViewInventoryItemComponent},
  {path : 'inventory/:id', component : EditInventoryItemComponent},
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) 
  ],
  exports: [
    RouterModule
  ],  
  declarations: []
})
export class AppRoutingModule { }
