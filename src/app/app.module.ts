import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { ChangeBackgroundDirective } from './Directives/change-background.directive';
import { ItemComponent } from './Components/item/item.component';
import { ItemImageComponent } from './Components/item-image/item-image.component';
import { ItemsListComponent } from './Components/items-list/items-list.component';
import { ItemLinkComponent } from './Components/item-link/item-link.component';
import { ZippyContentDirective} from './Directives/zippy-content-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    AddProductComponent,
    ItemImageComponent,
    ItemsListComponent,
    ItemLinkComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChangeBackgroundDirective,
    ZippyContentDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
