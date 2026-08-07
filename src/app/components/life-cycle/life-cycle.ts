import { NgClass } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PipeEx } from "../pipe-ex/pipe-ex";
import { PageHeader } from "../../resuables/page-header/page-header";
import { Hightlight } from '../../customDirectives/hightlight';
import { CopyPaste } from '../../customDirectives/copy-paste';
import { NumbersOnly } from '../../customDirectives/numbers-only';

@Component({
  selector: 'app-life-cycle',
  imports: [PipeEx, PageHeader,CopyPaste, Hightlight, NumbersOnly],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle  implements OnInit, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,DoCheck,OnDestroy{

  @ViewChild('temName') textRef!: ElementRef;
  @ViewChild('div1Tem') div1Element!: ElementRef;

  @ViewChild(PipeEx) pipeCompInstance!: PipeEx;

  constructor() {
    console.log("constructor Execiuted")
  }

  readPipeCom() {
    debugger;
    if(this.pipeCompInstance) {
      const data =  this.pipeCompInstance.curentDate;
    }
  }

  readTextValue() {
    debugger;
    if(this.textRef) {
      const value =  this.textRef.nativeElement.value;
      alert(value)
    }
  }

  addBgColor(color: string) {
    if(this.div1Element) {
      this.div1Element.nativeElement.style.backgroundColor = color;
    }
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
      if(this.textRef) {
      this.textRef.nativeElement.value = "React Js"
    }
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
