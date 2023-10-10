import { LoggingService } from "./logging/logging.service";
import { LoggingService } from "./logging/logging.service";

@injectable()

export class AccountService
{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
statusUpdated=new eventEmitter <string>(
  
)
  constructor(private loggingService:LoggingService){

  }

  addAccount(name:string, status:string){
    this.accounts.push({name:string, status:string})
    this.loggingService.logStatusChange(status)

  }

  updateStatus(id:number, status:string){
    this.accounts[id], status=status
    this.loggingService.logStatusChange(status)

  }

}
