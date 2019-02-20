import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private httpClient : HttpClient) { }

  public getManufacture(data){
    return this.httpClient.post('http://vegaroma.in/Bhushan_demo/inventory_system/angularAPI/manufacture.php',data).pipe(map((res:any)=>res));
  }

  public addManufacture(data){
    return this.httpClient.post('http://vegaroma.in/Bhushan_demo/inventory_system/angularAPI/manufacture.php',data).pipe(map((res:any)=>res));
  }

  public addModel(data){
    return this.httpClient.post('http://vegaroma.in/Bhushan_demo/inventory_system/angularAPI/model.php',data).pipe(map((res:any)=>res));
  }

  public listInventory(data){
    return this.httpClient.post('http://vegaroma.in/Bhushan_demo/inventory_system/angularAPI/model.php',data).pipe(map((res:any)=>res));
  }

  public modelDetails(data){
    return this.httpClient.post('http://vegaroma.in/Bhushan_demo/inventory_system/angularAPI/model.php',data).pipe(map((res:any)=>res));
  }


}
