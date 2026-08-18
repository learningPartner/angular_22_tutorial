import { Component, inject } from "@angular/core";
import { FormConfig } from "../../models/Form.Mode";
import { GlobalConstant } from "../../global.constant";
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { JsonPipe } from "@angular/common";

@Component({
  selector:
    "app-dynamic-form",
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl:
    "./dynamic-form.html",
  styleUrl:
    "./dynamic-form.css",
})
export class DynamicForm {

  formFields: FormConfig[] = GlobalConstant.customerFormConfig as FormConfig[];

  customerForm!: FormGroup;

  formBulder = inject(FormBuilder);

  constructor() {
    debugger;
   this.customerForm = this.initializeForm();
  }

  

  initializeForm() { 
    debugger;
    const formGroup:any = {}; 
    for(const field of this.formFields) {
      formGroup[field.name] = [field.initialValue, field.validatorFun.length != 0 ? field.validatorFun:[]]
    } 
    return this.formBulder.group(formGroup) 
  }

  getControl (controlName: string) :AbstractControl | null{
    return this.customerForm.get(controlName)
  }

  onSaveCustomer() {
    const formValue = this.customerForm.value;
    debugger;
  }


 }
