import { Directive, Renderer2, ElementRef, HostBinding, HostListner, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string='transparent'
  @Input('appBetterHighlight') highlighttColor:string= 'blue'
  @HostBinding('style.backgroundColor' )backgroundColor:string


  constructor(private elRef: ElementRef, private renderer:Renderer2) { }

  ngOnInIt(){
    this.backgroundColor==this.defaultColor
  //   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  // }
  @HostListner('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor=this.highlighttColor
  }


  @HostListner('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor=this.defaultColor
  }
  }
}
