import { Component, inject } from '@angular/core';
import { getFormatedCardNo } from '../../helper/common.helper';
import { Master } from '../../services/master';
import { IComment } from '../../models/user.model';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})

export class Variables {

  studentName: string = "Chetan Jogi";
  rollNo: number =  121;
  isStudentActive :boolean =  false;
  currentDate: Date = new Date();

  teacherName = "Rahul";
  cityList: string[] = ["Mumbai","Nagpur","Pune"];
  rollNoList : number [] = [12,13,14,145,16,17,23,23,23,232,32];
  student = {
    studName: 'Ram',
    rollNo: 121,
    city:'Pune'
  };
  studentList = [
    { studName: 'Ram', rollNo: 121, city:'Pune'},
    { studName: 'Shyam', rollNo: 122, city:'Mumbai'},
    { studName: 'Ankit', rollNo: 123, city:'Pune'}
  ];

  employee: any = "Chetan";

  creditCardNo: string = "1111222233335656";

  masterService =  inject(Master);

  constructor(){
    debugger;
    this.masterService.getComments().subscribe({
      next:(res:IComment[]) =>{
        debugger;
      }
    })
    debugger;
    const carNo =  getFormatedCardNo(this.creditCardNo);
    console.log(this.studentName);
    console.log(this.studentList);
    console.log(this.studentList[1]);
    //this.rollNo = "trdsfsdf";
    this.studentName = "Punam Sharma";
    this.employee = 122;
    this.employee = false;
    this.employee = []

    console.log('After Chnage '+ this.studentName);
  }




}
