import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { GlobalConstant } from "../../../global.constant";
import { RouterLink } from "@angular/router";

 
@Component({
  selector: "app-emp-list",
  imports: [CommonModule, RouterLink],
  templateUrl: "./emp-list.html",
  styleUrl: "./emp-list.css",
})
export class EmpList {
  employees : any[]=  GlobalConstant.empList;
} 
