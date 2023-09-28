import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `<app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer=false;
serverCreationStatus="no server was created";
serverName="tester"
serverCreated=false


constructor(){
  setTimeout(()=>{
    this.allowNewServer=true
  }, 2000);
}

ngOnInit() {

}
onCreateServer(){
  this.serverCreated=true
  this.serverCreationStatus="server was created Name is" + this.serverName;
}
}

// onUpdateServerName(event: any){
//   console.log(event)
//   this.serverName=(<HTMLInputElement>event.target).value
// }
