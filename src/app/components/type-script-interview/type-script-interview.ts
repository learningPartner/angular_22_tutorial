import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { Master } from "../../services/master";
import { Employee, IEmployee } from "../../models/Employee.model";
import { Helpder } from "../../services/helper";

@Component({
  selector: "app-type-script-interview",
  imports: [],
  templateUrl: "./type-script-interview.html",
  styleUrl: "./type-script-interview.css",
})
export class TypeScriptInterview {


  course: string | undefined = "Angular";

  studdent: any;

  employee: unknown;
  rollNo = 123;
  masterSrv  =  inject(Master);

  private studentName: string = "Rahul";

  //employeeStatus: EmployeeStatus =  "On-Hold";

  emp1?: IEmployee;

  employeeObj: IEmployee = {
    empId: 0, 
    isActive: false,
    skills: [], 
    status: 'Complted'
  }

  emp2: Employee = new Employee();

  _employeeName: string = "";

  set employeeName(val: string) {
    debugger;
    this._employeeName = val.trim();
  }

  get employeeName() {
    debugger;
    return this._employeeName.toUpperCase();
  }

  constructor(private http: HttpClient) {
    debugger;

    const formatedCradNoi = Helpder.formaqtCardNo("12312 321 3 213 213")
    this.employeeName = "  Chetan   ";

    alert(this.employeeName)
    const citys = ['','','',''];
    const number = [11,11,22,33]

    const lenegth1 = this.masterSrv.getArrayLength(citys);

    const lenegth2 = this.masterSrv.getArrayLength(number);

    //this.employeeObj.skills = ["",""]
     this.studdent = "Chetan";
     const newVal =  this.studdent.toUpperCase();
     //this.masterSrv.appVersionName = "v_0011"
     debugger;
     //const newVal2 = this.studdent.toFixed(2);

     this.employee = "Chetan";

     if(typeof this.employee == 'string' ) {
       const fullName  =  this.employee.toUpperCase();
     } 
  }

  private getFullName() : void {

  }

  getSum(num1: number, num2: number) : number{
    return num1+ num2;
  }

  catchError () : never{
    throw this.catchError()
  }

   
}



 