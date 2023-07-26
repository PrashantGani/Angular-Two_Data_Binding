import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Two_Way_Data_Binding';
  productName:undefined;
  productPrice:string='';
  productURl:string='';
  productDesc:string='';
  
}
