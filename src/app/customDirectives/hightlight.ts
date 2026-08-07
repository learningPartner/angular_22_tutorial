import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]',
})
export class Hightlight {

  @Input() textColor: string = "red";

  constructor(private elementRef: ElementRef) {
    console.log("Hightlight Executed")
  }

  @HostListener('mouseenter')
  onMouseHover() {
    console.log('Mouser Entered into Element');
    this.elementRef.nativeElement.style.color = this.textColor
    
  }

  @HostListener('mouseleave')
  onMouseLeftElement() {
     this.elementRef.nativeElement.style.color = 'black'
  }
}
