import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../inventory.service';

@Component({
  selector: 'app-manufacture-add',
  templateUrl: './manufacture-add.component.html',
  styleUrls: ['./manufacture-add.component.scss']
})
export class ManufactureAddComponent implements OnInit {
  manufacture_name:string=null;
  message:string = null;
  msg:boolean=false;
  constructor(private invService : InventoryService) { }
  ngOnInit() {
  }
  manuSubmit(data){
  var formData: FormData = new FormData();
  formData.append("manufacture_name", data.value.manufacture_name);
  formData.append("which_service", "addManufacture");
      this.invService.addManufacture(formData).subscribe(responce => {
    if(responce){
        this.message = "Record inserted successfully";
        this.msg=true;
        data.reset();
    }
      });  
      
      setTimeout(function(){
        this.msg=false;
        this.message = null;
      },2000);
  }
  hideMsg(){
    this.msg=false;
  }

}
