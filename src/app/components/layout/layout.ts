import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  loggedUserEmail: string = '';
  router = inject(Router);

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
}
