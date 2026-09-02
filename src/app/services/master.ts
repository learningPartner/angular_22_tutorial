import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { LoginModelAPI } from '../components/login/login';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { CommentDTO } from '../models/user.model';
import { toUserMapping } from '../helper/common.helper';

@Service()
export class Master {
    
  loggedUser: string = '';  
  $selectedRole : Subject<string> = new Subject<string>(); 
  $selectedRoleBehaviourSub : BehaviorSubject<string> = new BehaviorSubject<string>("");
  http = inject(HttpClient); 

  readonly appVersionName: string = 'v_001';


  getComments() {
      debugger;
    return this.http.get<CommentDTO[]>("https://jsonplaceholder.typicode.com/comments").pipe(
      map((dtoList: CommentDTO[]) => dtoList.map(toUserMapping))
    )
  }

  // getArrayLength(array: number[]) {

  // }

  getArrayLength<T>(data: T[]) {
    if(data.length ==0) {
      return false;
    } else {
      return data.length;
    } 
  }

  getClients() { 
     debugger;
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
