import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-tem-form',
  imports: [FormsModule, JsonPipe],
  templateUrl: './tem-form.html',
  styleUrl: './tem-form.css',
})
export class TemForm {

  companyObj: any = {
    companyId: 0,
    companyName: '',
    pinCode: '',
    address: '',
    phone: '',
  };

  onSaveCompany(fromRef: NgForm) {
   
    if(fromRef.invalid) {
      alert("Provide All Required details")
      
   
    } else {
      confirm("Are you Sure Want to Save");
      const formValue = this.companyObj;
    }
    
  }

  onPinchange() {
    console.log("Pin changes")
  }


}
