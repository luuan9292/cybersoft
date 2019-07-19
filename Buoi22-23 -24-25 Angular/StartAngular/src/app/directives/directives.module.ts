import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { FormsModule } from '@angular/forms';
import { BaitapComponent } from './baitap/baitap.component';
import { BaitapLoginComponent } from './baitap-login/baitap-login.component';

@NgModule({
  declarations: [DemoDirectiveComponent, BaitapComponent, BaitapLoginComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DemoDirectiveComponent, BaitapComponent, BaitapLoginComponent]
})
export class DirectivesModule { }
