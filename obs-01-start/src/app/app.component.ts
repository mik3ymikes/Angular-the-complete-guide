import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivate=false
  private activatedSub:Subscription
  constructor(private userService:UserService) {}

  ngOnInit() {
    this.activatedSub=this.userService.actiavatedEmitter.subscribe(generatorOrNext didActiavate =>{
      this.userActivated=didActiavate
    })
  }
  ngOnDestroy():void{
    this.activatedSub.unsubscribe()
  }
}
