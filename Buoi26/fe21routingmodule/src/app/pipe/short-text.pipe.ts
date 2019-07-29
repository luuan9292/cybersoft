import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(value: string, limit: number): any {
    //value ra gia tri dau vao, return dau ra
    //value kieu la string, neu lon hon 200 ki tu thi cat, con ko thi ko cat
    //limit cho phep truyen thao so thu 2 la so luong ki tu toi da
    if(value.length > limit) {
      return value.substr(0, limit) + '...';
    }
    return value;
  }

}

//ng g p shortText   cau lenh tao ra 1 pipe, no cung la 1 class, giong pipipe, directive, component giong nhau
