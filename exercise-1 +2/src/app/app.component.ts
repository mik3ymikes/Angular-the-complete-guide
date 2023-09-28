import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise-1 and 2 and 3';
  // username=""
  showSecret=false;
  log=[]

  onToggleDetails(){
    this.showSecret=!this.showSecret
    this.log.push(this.log.length +1)
  }
}
