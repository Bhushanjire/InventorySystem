import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InventoryService} from '../inventory.service';


@Component({
  selector: 'app-model-add',
  templateUrl: './model-add.component.html',
  styleUrls: ['./model-add.component.scss']
})
export class ModelAddComponent implements OnInit {
  manufacture_name:string =null;
  name:string=null;
  color=null;
  manufacturing_year=null;
  registration_no=null;
  note=null;
  picture1:File=null;
  picture2:File=null;
  manObject=null;
  manufactureList = null;
  constructor(private invService : InventoryService) { }
  message = null;
  msg:boolean=false;
  imageFile1:File=null;
  imageFile2:File=null;
  imgUrl1=null;
  imgUrl2=null;
  imgHideShow1 :boolean=false;
  imgHideShow2 :boolean=false;

  ngOnInit() {

    let formData: FormData = new FormData();
          formData.append("which_service", 'listManufacture');
      this.invService.getManufacture(formData).subscribe(responce => {
        this.manufactureList = responce;
      });
  }

  modelSubmit(data){
  var formData: FormData = new FormData();
  formData.append("manufacture_name", data.value.manufacture_name);
  formData.append("name", data.value.name);
  formData.append("color", data.value.color);
  formData.append("manufacturing_year", data.value.manufacturing_year);
  formData.append("registration_no", data.value.registration_no);
  formData.append("note", data.value.note);
  formData.append("picture1",this.imageFile1);
  formData.append("picture2",this.imageFile2);
  
  formData.append("which_service", 'modelAdd');
  console.log(formData);
      this.invService.addModel(formData).subscribe(responce => {
        if(responce){
          this.message = "Record inserted successfully";
          this.msg=true;
          this.imgUrl1=null;
          this.imgUrl2=null;
          this.imgHideShow1 =false;
          this.imgHideShow2 =false;
          data.reset();
      }

      });
    
  }
  fileChanged1(e: Event) {
    this.imgHideShow1 =true;
    var target: HTMLInputElement = e.target as HTMLInputElement;
    for(var i=0;i < target.files.length; i++) {
        //this.upload(target.files[i]);
    this.imageFile1=target.files[i];
    }
     var reader = new FileReader();
    reader.readAsDataURL(this.imageFile1); 
    reader.onload = (_event) => { 
    this.imgUrl1=reader.result; 
    }
    }

    fileChanged2(e: Event) {
      this.imgHideShow2 =true;
      var target: HTMLInputElement = e.target as HTMLInputElement;
      for(var i=0;i < target.files.length; i++) {
          //this.upload(target.files[i]);
      this.imageFile2=target.files[i];
      }
       var reader = new FileReader();
      reader.readAsDataURL(this.imageFile2); 
      reader.onload = (_event) => { 
      this.imgUrl2=reader.result; 
      }
      }


      hideMsg(){
        this.msg=false;
      }
}
