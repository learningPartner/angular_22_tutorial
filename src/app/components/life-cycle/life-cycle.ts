import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle  implements OnInit, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,DoCheck,OnDestroy{

  constructor() {
    console.log("constructor Execiuted")
  }

  ngOnInit(): void {
    //api call trigeer
    //subscription
    console.log("ngOnInit Execiuted")
  }

  ngAfterContentInit(): void {
     console.log("ngAfterContentInit Execiuted")
  }

  ngAfterContentChecked(): void {
     console.log("ngAfterContentChecked Execiuted")
  }

  ngAfterViewInit(): void {
    //viewchild
     console.log("ngAfterViewInit Execiuted")
  }

  ngAfterViewChecked(): void {
     console.log("ngAfterViewChecked Execiuted")
  }

  ngDoCheck(): void {
    //chnage detection
     console.log("ngDoCheck Execiuted")
  }

  ngOnDestroy(): void {
    //clean acitity 
    //unscrib
     console.log("ngOnDestroy Execiuted")
  }

}
