import { Component } from '@angular/core';

@Component ({
    selector: 'app-demo', //Ten dai dien cho component de goi khi su dung

    // template:`
    //     <div>Demo</div>
    // `,//Giao dien HTML cua Com     
    
    templateUrl: './demo.component.html',   //Duong dan den component html
    // styles: [`
    //     div{
    //         background-color: red;
    //         color: white
    //     }
    // `]//Mang vi co nhieu file CSS

    styleUrls: ['./demo.component.css']
})
export class DemoComponent {

}

//Module dung quan li cac Component nen phai add vao module