import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { LoginModelAPI } from '../components/login/login';
import { BehaviorSubject, Subject } from 'rxjs';

@Service()
export class Master {
    
  loggedUser: string = '';

  http = inject(HttpClient);

  $selectedRole : Subject<string> = new Subject<string>();
  
  $selectedRoleBehaviourSub : BehaviorSubject<string> = new BehaviorSubject<string>("");


  getClients() {
   
    return this.http.get("https://api.freeprojectapi.com/api/SmartParking/GetAllClients")
  }

  saveClient(obj:any) {
    return this.http.post("https://api.freeprojectapi.com/api/SmartParking/addclient",obj)
  }

  getFormatedCardNo(cardNo: string) {
   
    const astrticDat = '**** **** **';
    return astrticDat + ' ' + cardNo.substring(10);
  }

  loginUser(obj: LoginModelAPI) {
    return this.http.post("https://projectapi.gerasim.in/api/UserApp/login", obj)
  }
}
