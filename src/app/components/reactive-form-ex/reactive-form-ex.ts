import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-form-ex',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-ex.html',
  styleUrl: './reactive-form-ex.css',
})
export class ReactiveFormEx {
  userFrom: FormGroup = new FormGroup({
    userId: new FormControl(0),
    userName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    emailId: new FormControl('', [Validators.required, Validators.email]),
    fullName: new FormControl(''),
    password: new FormControl(''),
  });

  formBuilder = inject(FormBuilder); //16

  studentForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.formBuilder.group({
      studId: [0],
      studName: ['', [Validators.required, Validators.minLength(6)]],
      city: [''],
    });
  }

  onSaveCustomer() {
    if (this.userFrom.invalid) {
      alert('Provide Valid Details');
    } else {
      confirm('Are you Sure want to Save ');
      const formValue = this.userFrom.value;
     
    }
  }
}
