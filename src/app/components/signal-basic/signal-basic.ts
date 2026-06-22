import { Component, signal, WritableSignal } from '@angular/core';
import { form, FormField, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-basic',
  imports: [],
  templateUrl: './signal-basic.html',
  styleUrl: './signal-basic.css',
})
export class SignalBasic {

  employeeName: string = "Chetan Jogi";

  empMobileNo = signal("0099009900");
  isActive: WritableSignal<boolean> = signal(false);
  cityListSignal: WritableSignal<string[]>= signal([
    'Nagpur','Panji','Jaiur','Pune'])

 

 

  constructor() {
    //  setTimeout(() => {
    //   debugger;
    //   this.employeeName = "Punam Sharma"
    //  }, 2000);

    setTimeout(() => {
      this.empMobileNo.set("4455445544")
    }, 2000);
  }

   

  chnageEmpName() {
    this.employeeName = "Rahul";
  }

  chnageMobile() {
    this.empMobileNo.set("1122112233")
  }
}
