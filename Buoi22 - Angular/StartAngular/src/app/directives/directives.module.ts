import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { FormsModule } from '@angular/forms';
import { BaitapComponent } from './baitap/baitap.component';

@NgModule({
  declarations: [DemoDirectiveComponent, BaitapComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DemoDirectiveComponent, BaitapComponent]
})
export class DirectivesModule { }
