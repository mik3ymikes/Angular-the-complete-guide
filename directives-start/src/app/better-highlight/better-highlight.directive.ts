import { Directive, Renderer2, ElementRef, HostListner } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {


  constructor(private elRef: ElementRef, private renderer:Renderer2) { }

  ngOnInIt(){
  //   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  // }
  @HostListner('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }


  @HostListner('mouseleave') mouseleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
  }
  }
}
