import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]',
})
export class NumbersOnly {
  
 
  @HostListener('keypress',['$event'])
  onUserInput(event:KeyboardEvent) {
    debugger; 
    const allowedNumbeers= /[0-9]/;
    if(!allowedNumbeers.test(event.key)) {
      event.preventDefault();
    }
  }
}
