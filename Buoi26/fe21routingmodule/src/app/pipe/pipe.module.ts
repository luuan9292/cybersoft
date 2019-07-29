import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortTextPipe } from './short-text.pipe';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [ShortTextPipe, SafePipe],
  imports: [
    CommonModule
  ],
  exports: [ShortTextPipe, SafePipe]
})
export class PipeModule { }
