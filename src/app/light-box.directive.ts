import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLightBox]'
})
export class LightBoxDirective {

  @Input() highlightColor:string="red";
  // reference any element in html
  constructor(private element:ElementRef) {
    this.element.nativeElement.style.border="2px solid red";
  }
  // nativeElement -->  to reach native dom element
  // such as getElementById


  //@input()  property decerator


  // hostlistener علشان  lisen on event   method decretor
  @HostListener('mouseover') onMouseOver(){
    this.element.nativeElement.style.border=`2px solid ${this.highlightColor}`;
  }

  @HostListener('mouseout') onMouseOut(){
    this.element.nativeElement.style.border="2px solid red";
  }
}
