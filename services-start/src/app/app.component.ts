import { Component } from '@angular/core';

import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountsService]
})

export class AppComponent implements ONINIi {
accounts:{name:string, status:string}[]=[];

constructor(private accountsService:AccountsService) {}

ngOnInit(){
  this.accounts=this.accountsService.accounts
}

}
