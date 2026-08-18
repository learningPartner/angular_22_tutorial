import { Component, inject, signal } from '@angular/core';
import { form, FormField, minLength, required } from '@angular/forms/signals';
import { FormConfig } from '../../models/Form.Mode';
import { GlobalConstant } from '../../global.constant';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-signal-form-ex',
  imports: [FormField, ReactiveFormsModule],
  templateUrl: './signal-form-ex.html',
  styleUrl: './signal-form-ex.css',
})
export class SignalFormEx {


  formFields: FormConfig[] = GlobalConstant.employeeFormConfig as FormConfig[];

  employeeForm!: FormGroup;

  formBulder = inject(FormBuilder);

  constructor() {
    debugger;
   this.employeeForm = this.initializeForm();
  }

  initializeForm() { 
    debugger;
    const formGroup:any = {}; 
    for(const field of this.formFields) {
      formGroup[field.name] = [field.initialValue, field.validatorFun.length != 0 ? field.validatorFun:[]]
    } 
    return this.formBulder.group(formGroup) 
  }

   onSaveEmployee() {
    const formValue = this.employeeForm.value;
    debugger;
  }



  // employeeModel =  signal({
  //   empName: '',
  //   empCity:'',
  //   empState:''
  // });

  // employeeForm = form(this.employeeModel,(schema)=>{
  //   required(schema.empName,{message:'Name is Required'}),
  //   required(schema.empCity, {message:'City is Required'}),
  //   minLength(schema.empName,4,{message:'Min 4 char needed'})
  // });


  // onSaveEmp() {
  //   const formValue =  this.employeeForm().value();
   
  // }
}
