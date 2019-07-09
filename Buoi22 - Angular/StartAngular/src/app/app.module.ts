import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DemoComponent } from './demo/demo.component';
import { Bt1HeaderComponent } from './exercise1/bt1-header/bt1-header.component';
import { Bt1ContentComponent } from './exercise1/bt1-content/bt1-content.component';
import { Bt1FooterComponent } from './exercise1/bt1-footer/bt1-footer.component';
import { Bt1IndexComponent } from './exercise1/bt1-index/bt1-index.component';
import { Bt1SidebarComponent } from './exercise1/bt1-sidebar/bt1-sidebar.component';
import { ShoppingIndexComponent } from './shopping/shopping-index/shopping-index.component';
import { ShoppingHeaderComponent } from './shopping/shopping-header/shopping-header.component'; //add component vao cho module quan li
import { LayoutDemoModule } from './layout-demo/layout-demo.module';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Bt1HeaderComponent,
    Bt1ContentComponent,
    Bt1FooterComponent,
    Bt1IndexComponent,
    Bt1SidebarComponent,
    ShoppingIndexComponent,
    ShoppingHeaderComponent, //Khai bao component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutDemoModule,
    DirectivesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//tao compone khong co thu thuc spec go lenh: ng g c ten_component --spec false
