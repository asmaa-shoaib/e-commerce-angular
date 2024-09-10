import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appChangeBackground]'
})
export class ChangeBackgroundDirective {

  constructor(private el:ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
   }
   @HostListener('click',['$event.target'])
   getingValue(e:any){
    console.log(e)
    console.log(this.Color)
    this.Color='green'
   }
   @HostListener('mouseenter',['$event.target'])
   chang(){
    console.log(this.Color)
    this.Color='blue'
   }
   @HostBinding('style.Color') Color=' ';
}
