import { Component, trigger, state, style } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations:[
    trigger('divState', [
      state('normal', style({
        'backgorund-color':'red',
        transform:'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor:'blue',
        transform:'translateX(100px)'
      }))
      transition('normal <=>hgihlighted', animate(300))
      // transition('highlighted =>normal', animate(300))


    ]),
    trigger('wildState', [
      state('normal', style({
        'backgorund-color':'red',
        transform:'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor:'blue',
        transform:'translateX(100px) scale(1)'
      }))
      state('shrunken', style({
        backgroundColor:'green',
        transform:'translateX(100px) scale(0.5)'
      }))
      transition('normal <=>hgihlighted', animate(300))
      transition('normal <=>hgihlighted', animate(800))
      TransitionEvent('shurnken <=> * ', animate (500))

      // transition('highlighted =>normal', animate(300))

  ]
})
export class AppComponent {
  state='normal'
  wildState='normal'
  list = ['Milk', 'Sugar', 'Bread'];



  onAnimate({
    this.state=='normal' ? this.state='highlighted': this.state='normal'
    this.wildState =='normal' ? this.Wildstate='highlighted': this.Wildstate='normal'
  })

  onShrink(){
this.wildState='shrunken'
  }

    onAdd(item) {
      this.list.push(item);
    }
}
