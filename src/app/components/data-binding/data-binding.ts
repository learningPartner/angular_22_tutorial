import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})

export class DataBinding {

  productName: string = "Headphone"
  productPrice = 1200;
  maxAlloowedChar = 5;
  isProductActive =  false;


  myDynamicType = 'button';

  showWelcomeText() {
    alert("Welcome v22")
  }

  onDropdownChange() {
    alert("Dropdonw has chnaged")
  }

  onMouseEnter() {
    console.log("Mouse Enytereed")
  }

  onMouseLeft() {
    console.log("MOuse Lefet Div");
    
  }





}
