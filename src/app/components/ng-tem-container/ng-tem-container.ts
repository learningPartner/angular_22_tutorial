import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-ng-tem-container',
  imports: [NgFor, NgIf, NgTemplateOutlet, ɵEmptyOutletComponent],
  templateUrl: './ng-tem-container.html',
  styleUrl: './ng-tem-container.css',
})
export class NgTemContainer {
  studentList = [
    { studId: 322, isActive: true, name: 'abc', city: 'pune', rollNo: 121 },
    { studId: 142, isActive: false, name: 'Mno', city: 'mumbai', rollNo: 122 },
    { studId: 324, isActive: true, name: 'Efg', city: 'jabalpur', rollNo: 123 },
    { studId: 234, isActive: false, name: 'xyz', city: 'Thane', rollNo: 124 },
    { studId: 142, isActive: false, name: 'Mno', city: 'mumbai', rollNo: 122 },
    { studId: 324, isActive: true, name: 'Efg', city: 'jabalpur', rollNo: 123 },
    { studId: 142, isActive: true, name: 'Mno', city: 'mumbai', rollNo: 122 },
    { studId: 324, isActive: false, name: 'Efg', city: 'jabalpur', rollNo: 123 },
  ];

  loggedUSerName = "Chetan"
}
