import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appHighLight]'
})
export class HighLightDirective {

    constructor(private ele: ElementRef, private render: Renderer2) {
        // this.ele.nativeElement.style.backgroundColor= 'LimeGreen'; //Cach 1
        this.render.setStyle(this.ele.nativeElement, "background-color", "#28a745"); //Cach 2
    }

    //Set mac dinh uu tien cao hon ham khoi tao
    @HostBinding('style.backgroundColor') bgColor:string="red";

    //Dinh nghia su kien
    @HostListener("mouseenter") SukienHover(eventData: Event) {
        this.render.setStyle(this.ele.nativeElement, "background-color", "gold");
    }

    @HostListener("mouseleave") SukienMouseLeave(eventData: Event) {
        this.render.setStyle(this.ele.nativeElement, "background-color", "#28a745"); //Cach 2
    }

}



//ng g directive HighLight
//file nay la attribute tu dinh nghia

