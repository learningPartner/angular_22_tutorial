import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Master } from '../../services/master';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  //loginObj: LoginModel  = new LoginModel();
  loginObj: LoginModelAPI = new LoginModelAPI();
  router = inject(Router);
  masterSr = inject(Master);

  onLogin() {
    debugger;
    this.masterSr.loginUser(this.loginObj).subscribe({
      next: (res: any) => {
        localStorage.setItem('angular22User', res.data.emailId);
        localStorage.setItem('loginToken', res.data.token);
        this.router.navigateByUrl('admin/databinding');
      },
      error:(error: any)=>{
        debugger;
        if(error.status ==401) {
          alert("Wrong Credentials")
        } else {
          alert("API Error")
        }
      }
    });
    // if(this.loginObj.email == "admin@gmail.com" && this.loginObj.password == "223344") {
    //   localStorage.setItem('angular22User',this.loginObj.email )
    //   this.router.navigateByUrl("admin/databinding");
    // } else {
    //   alert("Wrong Credentials")
    // }
  }
}

class LoginModel {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}

export class LoginModelAPI {
  EmailId: string;
  Password: string;

  constructor() {
    this.EmailId = '';
    this.Password = '';
  }
}
