import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AddItemComponent } from './add-item/add-item.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';

const routes: Routes = [
	{ path: 'add-item', component: AddItemComponent },
	{ path: 'inventory-list', component: InventoryListComponent }
];

@NgModule({
	declarations: [

	],
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {
}
