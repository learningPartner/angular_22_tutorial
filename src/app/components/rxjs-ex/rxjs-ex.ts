import { Component, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Master } from '../../services/master';

@Component({
  selector: 'app-rxjs-ex',
  imports: [],
  templateUrl: './rxjs-ex.html',
  styleUrl: './rxjs-ex.css',
})
export class RxjsEx {

  rollNo = 4;

  rollNoList =  of([112,114,114,115,116]);
  masterServcie = inject(Master);

  constructor() {
    this.masterServcie.$selectedRole.subscribe({
      next:(role: string)=>{
        debugger;
      }
    })
     this.masterServcie.$selectedRoleBehaviourSub.subscribe({
      next:(rrole:string)=>{
        debugger;
      }
    })
    // const promise = new Promise((resolve, reject) => {
    //   if (this.rollNo % 2 == 0) {
    //     resolve("NUm is Even")
    //   } else {
    //     reject("Num  is Odd")
    //   }
    // });
    // promise.then((res) => {
    //   console.log(res)
    //   debugger;
    // }).catch((error) => {
    //   debugger;
    //   console.log(error)
    // })

    // const obs1 = new Observable((res) => {
    //   if (this.rollNo % 2 == 0) {
    //     res.next("NUm is Even")
    //   } else {
    //     res.error("Num  is Odd")
    //   }
    // })
    // obs1.subscribe({
    //   next: (res: any) => {
    //     debugger;
    //   },
    //   error: (error: any) => {
    //     debugger;
    //   }
    // })

    // this.rollNoList.subscribe((res:number[])=>{
    //   debugger;
    // })
  }

}
