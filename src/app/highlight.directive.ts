import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef :ElementRef) { 
    this.elementRef.nativeElement.style.backgroundColor = '#cacaca';

  }
  @Input() hihglightColor:string;
  @Input() defaulthtColor:string;

  @HostBinding('style.backgroundColor') private backgroundColor:string;
  @HostListener('mouseover') mouseOver()
  {
    this.backgroundColor = this.hihglightColor;
  }
    @HostListener('mouseleave') mouseLeave()
  {
    this.backgroundColor = this.defaulthtColor;
  }
  ngOnInit():void{
   this.backgroundColor = this.defaulthtColor;
  }
}
