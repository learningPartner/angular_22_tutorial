import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})

export class DataBinding  implements OnInit{

  productName: string = "Headphone"
  productPrice = 1200;
  maxAlloowedChar = 5;
  isProductActive =  false;


  myDynamicType = 'button';

  http = inject(HttpClient);
  userList =  signal<any>([]);

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.http.get("https://projectapi.gerasim.in/api/UserApp/GetAllUsers").subscribe({
      next:(res:any)=>{
        this.userList =  res.data;
      }
    })
  }
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
