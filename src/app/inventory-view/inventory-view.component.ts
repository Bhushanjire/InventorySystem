import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../inventory.service';
import { BsModalService } from 'ngx-bootstrap/modal'; 

@Component({
  selector: 'app-inventory-view',
  templateUrl: './inventory-view.component.html',
  styleUrls: ['./inventory-view.component.scss']
})
export class InventoryViewComponent implements OnInit {
  constructor(private invService : InventoryService, private modalService : BsModalService) { }
  inventoryList="";
  sr_no=1;
  modalRef:any;
  modelDetail:any;
  ngOnInit() {
    let formData: FormData = new FormData();
    formData.append("which_service", 'inventoryList');
    this.invService.listInventory(formData).subscribe(responce => {
      this.inventoryList =responce;
    });
  }

  openModelPopup(model_id,template){
    let formData: FormData = new FormData();
    formData.append("which_service", 'modelDetails');
    formData.append("model_id", model_id);

    this.invService.modelDetails(formData).subscribe(responce => {
      if(responce){
        this.modelDetail=responce;
        this.modalRef = this.modalService.show(template);
      }
    });
}

}
