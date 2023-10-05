import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oct-5';
  isDisabled=true
  // info="Test"
  info=""


  undisable(){
   this.isDisabled=!this.isDisabled


  }


  inpu(event:any){
   this.info=event.target.value
  }

}
