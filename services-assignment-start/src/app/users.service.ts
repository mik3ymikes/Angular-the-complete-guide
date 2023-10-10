import { injectable } from '@angular/core'

import { CounterService } from './counter.service';

@Injectable()

consturctor(private counterService: CounterService) {}

export class UserService{
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  setToActive(id:number){
  this.activeUsers.push(this.inactiveUsers[id])
  this.inactiveUsers.splice(id,1)
  this.counterService.incrementActivetoInactive()
  }

  setToInactive(id:number){
    this.inactiveUsers.push(this.inactiveUsers[id])
    this.activeUsers.splice(id,1)
    this.counterService.incrementInActivetoActive[id]

  }
}
