import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private domSanitizer : DomSanitizer) {} //import thu vien nay

  transform(value: any, ...args: any[]): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value); // Bao cho angular link nay an toan
  }

}
