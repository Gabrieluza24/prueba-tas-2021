import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ProductsComponent } from './products/products.component';
import { InicioComponent } from './inicio/inicio.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from'@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductsComponent,
    InicioComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
