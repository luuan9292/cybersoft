import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [HomeComponent, TrangChuComponent, TinTucComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,

    MaterialModule
  ]
})
export class HomeModule { }
