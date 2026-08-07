import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCopyPaste]',
})
export class CopyPaste {

  constructor(private elementRef: ElementRef) {

  }

  @HostListener('click')
  onCopy() {
    debugger; 
    const textOfElement =  this.elementRef.nativeElement.innerText;
      navigator.clipboard.writeText(textOfElement)
    .then(() => {
      // optionally emit an event or show a "copied!" toast
    })
    .catch(err => {
      console.error('Failed to copy text: ', err);
    });
  }
}
