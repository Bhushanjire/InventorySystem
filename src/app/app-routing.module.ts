import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ManufactureAddComponent } from './manufacture-add/manufacture-add.component';
import { ModelAddComponent } from './model-add/model-add.component';
import { InventoryViewComponent } from './inventory-view/inventory-view.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'manufactureAdd',component:ManufactureAddComponent},
  {path:'modelAdd',component:ModelAddComponent},
  {path:'inventoryView',component:InventoryViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
