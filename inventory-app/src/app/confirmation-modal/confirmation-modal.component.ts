import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../class/product/product';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InventoryService } from '../service/inventory.service';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {

  @Input() product: Product;
  title: string = 'Delete';

  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal,
    public inventoryService: InventoryService,
    private service: ServiceService,
  ) { }

  ngOnInit(): void {
  }

  delete() {
    this.inventoryService
      .deleteProductById(this.product.id)
      .subscribe((result) => {
        if (result) {
          console.log('show something');
        } else {
          this.getAllProducts();
          this.modalService.dismissAll();
        }
      });
  }

  getAllProducts() {
    this.inventoryService.getAllProducts()
      .subscribe(result => {
        this.service.setInventory(result);
      })
  }

}
