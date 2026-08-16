import { DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { CardNoFormatterPipe } from '../../pipes/card-no-formatter-pipe';
import { UserCard } from '../userCard/UserCard';

@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe,LowerCasePipe,
    TitleCasePipe,DecimalPipe, SlicePipe, JsonPipe,
  DatePipe, CardNoFormatterPipe,UserCard],
  templateUrl: './pipe-ex.html',
  styleUrl: './pipe-ex.css',
  
})
export class PipeEx {

  studentName: string = "chetan jogi";
  studentAddress: string = "plot no 1212, Near SBI Atm";
  courserName = 'Angular';

  productPrice: number = 1200.1523;

  rollNoList = [11,12,13,14,15,16,17,18];

  studentObj = {
    name: 'chetan',
    city :'pune',
    pincode:'112233'
  };

  cardNo = "2324243344556767";

  curentDate: Date = new Date();



  //capitalStudentName: string = '';

  constructor() {
   // this.capitalStudentName =  this.studentName.toUpperCase();
   
  }

  changeCOurse() {
    this.courserName = "ReactJs"
  }

}
