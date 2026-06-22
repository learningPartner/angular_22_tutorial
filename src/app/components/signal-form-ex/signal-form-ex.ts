import { Component, signal } from '@angular/core';
import { form, FormField, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form-ex',
  imports: [FormField],
  templateUrl: './signal-form-ex.html',
  styleUrl: './signal-form-ex.css',
})
export class SignalFormEx {


  employeeModel =  signal({
    empName: '',
    empCity:'',
    empState:''
  });

  employeeForm = form(this.employeeModel,(schema)=>{
    required(schema.empName,{message:'Name is Required'}),
    required(schema.empCity, {message:'City is Required'}),
    minLength(schema.empName,4,{message:'Min 4 char needed'})
  });


  onSaveEmp() {
    const formValue =  this.employeeForm().value();
    debugger;
  }
}
