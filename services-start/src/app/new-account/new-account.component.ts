import { Component } from '@angular/core';
import { LoggingService } from '../logging/logging.service';
import { AccountService } from '../accounts.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  porviders:[LoggingService, AccountService]
})
export class NewAccountComponent {


  constructor(private loggingService: LoggingService,
    private accountsService:AccountsService}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
    this.loggingService.logStatusChange(accountStatus)
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
