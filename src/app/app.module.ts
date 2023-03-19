import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './Components/products/products.component';
import { OrderParentComponent } from './Components/order-parent/order-parent.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { MainComponent } from './Components/main/main.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { BorderStyleDirective } from './Directives/border-style.directive';
import { CalcTaxPipe } from './pipes/calc-tax.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AddNewProductComponent } from './Components/Admin/add-new-product/add-new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductsComponent,
    OrderParentComponent,
    NotFoundComponent,
    MainComponent,
    ProductDetailsComponent,
    BorderStyleDirective,
    CalcTaxPipe,
    AddNewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
