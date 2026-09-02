import { Component, input } from "@angular/core";
import { IEmployee } from "../../models/Employee.model";

@Component({
  selector: "app-user-card",
  template: `<div class="card">
    <div class="card-header primarycolor">{{ cardHeader() }}</div>
    <div class="card-body">Content</div>
    <div class="card-footer">Footer</div>
  </div>`,
  styles: [".primarycolor {color:red}"],
})
export class UserCard {
  cardHeader = input<string>("");

  // empo: IEmployee = {
  //   empId: 0,
  //   empName:'',
  //   isActive: false,
  //   skills: []
  // }
}
