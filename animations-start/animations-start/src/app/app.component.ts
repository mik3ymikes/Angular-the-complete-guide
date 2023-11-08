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
      TransitionEvent('shurnken <=> * ', [
        style({
          'background-color:'orange'
        }),
        animate(1000, style ({
          borderRadius: '5-px'
        })),
        animate(500)
      ],

      trigger('list1', [
        state('in', style({
         opacity:1
          transform:'translateX(0)'
        })),

        transition('void =>*',
        style({
          opacity:0,
          transform: 'translateX(-100px)'
        }),
        [animate(300))]



      ]),
      transition('* =>void',
      [animate(300), style({
        transform"'translateX(100px),
        opacity:0
      })
      ]
      }),

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
