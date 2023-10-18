import { Injectable, EventEmitter} form '@angular/core'
import { Subject} from 'rxjs'

@injectable({providedIn:'root'})



export class UserService{
  actiavatedEmitter=new Subject<boolean>()

}
