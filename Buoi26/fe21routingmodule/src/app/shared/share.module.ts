import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipeModule } from '../pipe/pipe.module';

// import { FormsModule } from '@angular/forms';
// import { PipeModule } from '../pipe/pipe.module'; // hay xai thi bo het vo day

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    PipeModule
  ],
  exports: [
    FormsModule,
    PipeModule
  ]
})
export class ShareModule { }

//DUng de tap hop lai cac module hay xai thi bo vao day, cho nao can xai 2 cai nay thi chi can import 1 cai nay thoi
