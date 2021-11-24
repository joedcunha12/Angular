import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseover') mouseover() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseout') mouseout() {
    this.elementRef.nativeElement.style.backgroundColor = '';
  }
}
