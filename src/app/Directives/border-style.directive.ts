import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[BorderStyle]',
})
export class BorderStyleDirective implements OnChanges {
  @Input() borderColor: string = 'green';
  @Input('BorderStyle') mouseOutborderColor: string = 'yellow';
  constructor(private elem: ElementRef) {
    // elem.nativeElement.style.border=`3px dotted ${this.mouseOutborderColor}`
  }
  ngOnChanges(): void {
    this.elem.nativeElement.style.border = `3px dotted ${this.mouseOutborderColor}`;
  }

  @HostListener('mouseover') mouseOverFunc() {
    this.elem.nativeElement.style.border = `5px solid ${this.borderColor}`;
  }
  @HostListener('mouseout') mouseOutFunc() {
    this.elem.nativeElement.style.border = `3px dotted ${this.mouseOutborderColor}`;
  }
}
