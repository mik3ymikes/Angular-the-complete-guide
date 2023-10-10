import { Directive } from '@angular/core'


@Directive({
selector:'[appBasicHighlight]'

})


//must be ElementRef
export class BasicHighlightDirectives implements OnInit{
constructor(private elementRef:ElementRef){
}
ngOnInIt(){
  this.elementRef.nativeElement.style.backgroundColor="green"
}
}
