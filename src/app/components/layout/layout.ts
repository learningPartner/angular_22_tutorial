import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Master } from '../../services/master';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  loggedUserEmail: string = '';
  router = inject(Router);
  masteService = inject(Master);

  constructor() {
    debugger;
    const loggedData =  localStorage.getItem("angular22User");
    if(loggedData != null) {
      this.loggedUserEmail = loggedData;
    }
  }

  onLogOff() {
    localStorage.removeItem("angular22User");
    this.router.navigateByUrl("/login")
  }

  onRoleChnages(event:any) {
    debugger;
    const role=  event.target.value;
    this.masteService.$selectedRole.next(role);
    this.masteService.$selectedRoleBehaviourSub.next(role);
  }
}
