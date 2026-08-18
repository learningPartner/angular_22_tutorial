import { Component, signal, WritableSignal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GlobalConstant } from "../../../global.constant";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-emp-details",
  imports: [FormsModule],
  templateUrl: "./emp-details.html",
  styleUrl: "./emp-details.css",
})
export class EmpDetails {

  currentId: number = 0;
  selectedEmployeeDetals: WritableSignal<Employee>   = signal<Employee>({
    department:'',
    email:'',
    empId:0,
    location:'',
    mobile:'',
    name: '',
    role:''
  });


  constructor(private actiovateRoute: ActivatedRoute) {
    this.actiovateRoute.params.subscribe((Res:any)=>{
      debugger;
      this.currentId =  Res.id;
      const record =  GlobalConstant.empList.find(m=>m.empId ==this.currentId);
      if(record != undefined) {
          this.selectedEmployeeDetals.set(record)
      }
    
    })
  }
}

export interface Employee {
  empId: number;
  name: string;
  role: string;
  department: string;
  location: string;
  mobile: string;
  email: string;
}
