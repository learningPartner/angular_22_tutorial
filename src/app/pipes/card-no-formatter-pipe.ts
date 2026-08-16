import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNoFormatter',
  pure: true
})
export class CardNoFormatterPipe implements PipeTransform {

  transform(value: string): string {
     debugger;
    console.log("Pipe Executed")
    const lastFourChar =  value.slice(-4);
    return "**** **** **** " + lastFourChar;
  }
  
}
