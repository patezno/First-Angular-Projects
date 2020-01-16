import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') color: string;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') mouseIn() {
    this.resaltar(this.color || 'yellow');
  }

  @HostListener('mouseleave') mouseOut() {
    this.resaltar(null);
  }

  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
