import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ManufactureAddComponent } from './manufacture-add/manufacture-add.component';
import { ModelAddComponent } from './model-add/model-add.component';
import { InventoryViewComponent } from './inventory-view/inventory-view.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CustomvalidationComponent } from './customvalidation/customvalidation.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ManufactureAddComponent,
    ModelAddComponent,
    InventoryViewComponent,
    CustomvalidationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
