import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoInputComponent } from './demo-input/demo-input.component';
import { DemoInputChildComponent } from './demo-input-child/demo-input-child.component';
import { DemoOutputComponent } from './demo-output/demo-output.component';
import { DemoOutputChildComponent } from './demo-output-child/demo-output-child.component';
import { SeatListComponent } from './seat-list/seat-list.component';
import { SeatComponent } from './seat/seat.component';

@NgModule({
  declarations: [DemoInputComponent, DemoInputChildComponent, DemoOutputComponent, DemoOutputChildComponent, SeatListComponent, SeatComponent],
  imports: [
    CommonModule
  ],
  exports: [DemoInputComponent, DemoInputChildComponent, DemoOutputComponent, DemoOutputChildComponent, SeatListComponent, SeatComponent]
})
export class BookingSeatModule { }
