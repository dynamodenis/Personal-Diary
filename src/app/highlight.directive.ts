import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor( private elem:ElementRef) {
    this.elem.nativeElement.style.textDecoration='underline';
    this.elem.nativeElement.style.backgroundColor=' 255, 253, 208';

   }

}
