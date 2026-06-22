import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Master } from '../../services/master';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isDiv1Visiale: boolean = true;
  isOffer = false;
  orderStatus = 'failed';

  cityList = ['Pune', 'Nagpur', 'Mumbai', 'Thane', 'Solapur'];

  masterSrv =  inject(Master)

  studentList = [
    {studId: 322, name: 'abc', city: 'pune', rollNo: 121 },
    {studId: 142, name: 'Mno', city: 'mumbai', rollNo: 122 },
    {studId: 324, name: 'Efg', city: 'jabalpur', rollNo: 123 },
    {studId: 234, name: 'xyz', city: 'Thane', rollNo: 124 },
    {studId: 142, name: 'Mno', city: 'mumbai', rollNo: 122 },
    {studId: 324, name: 'Efg', city: 'jabalpur', rollNo: 123 },
    {studId: 142, name: 'Mno', city: 'mumbai', rollNo: 122 },
    {studId: 324, name: 'Efg', city: 'jabalpur', rollNo: 123 },
  ];
  selectedStudent ='';
  originalCardNo = "1211232343435566";

  formatCardNo: string = '';
  constructor() {
    this.formatCardNo =  this.masterSrv.getFormatedCardNo(this.originalCardNo)
    debugger;
  }


  storeLoggedData() {
    debugger;
    this.masterSrv.loggedUser = 'chetan_jogi'
  }
  toggleDiv1() {
    this.isDiv1Visiale = !this.isDiv1Visiale;
  }
}
