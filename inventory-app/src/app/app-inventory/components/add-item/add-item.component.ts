import { Component, OnInit } from '@angular/core';
import { Product } from '../../class/product/product';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { InventoryService } from '../../service/inventory.service';
import { environment } from "../../../../environments/environment";

@Component({
	selector: 'app-add-item',
	templateUrl: './add-item.component.html',
	styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

	userType: string = 'customer';
	product: Product;

	constructor(private http: HttpClient, private router: Router, private inventoryService: InventoryService) { }

	ngOnInit(): void {
		this.product = new Product();
		this.userType = environment.admin ? 'admin' : 'customer';
	}

	// Adds an item to inventory and route to inventory list
	addItem() {
		console.log("addItem() called.");

		console.log(this.product);

		this.inventoryService.addProduct(this.product).subscribe(data => {
			this.router.navigate(['/inventory-list'])
		});
	}
}
