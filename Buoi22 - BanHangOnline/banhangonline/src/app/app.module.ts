import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingIndexComponent } from './ShoppingOnline/shopping-index/shopping-index.component';
import { ShoppingHeaderComponent } from './ShoppingOnline/shopping-header/shopping-header.component';
import { ShoppingCarouselComponent } from './ShoppingOnline/shopping-carousel/shopping-carousel.component';
import { ShoppingSmartphoneComponent } from './ShoppingOnline/shopping-smartphone/shopping-smartphone.component';
import { ShoppingSmartphoneItemComponent } from './ShoppingOnline/shopping-smartphone-item/shopping-smartphone-item.component';
import { ShoppingLaptopComponent } from './ShoppingOnline/shopping-laptop/shopping-laptop.component';
import { ShoppingLatopItemComponent } from './ShoppingOnline/shopping-latop-item/shopping-latop-item.component';
import { ShoppingPromotionComponent } from './ShoppingOnline/shopping-promotion/shopping-promotion.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingIndexComponent,
    ShoppingHeaderComponent,
    ShoppingCarouselComponent,
    ShoppingSmartphoneComponent,
    ShoppingSmartphoneItemComponent,
    ShoppingLaptopComponent,
    ShoppingLatopItemComponent,
    ShoppingPromotionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
