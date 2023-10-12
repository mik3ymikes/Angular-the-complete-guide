import  { CanActivate, ActivatedRouteSnapShot, RouterStateSnapshot from '@angular/router'}
import { injectable} from '@angularCore'
import { AuthService} from './auth.service'





@Injectable()
export class AuthGuard implements CanActiavate, CanActivateChild{
canActivate (route:ActivatedRouteSnapShot, state: RouterStateSnapshot): Observable <boolean>
| boolean {
this.authService.isAuthenticated()
.then{
  (authnticated:boolean) => {
    if (authenticated){
      return true;
      else{
        this.router.navigate(['/'])
      }
    }
  }
}
}
canActivateChild (route:ActivatedRouteSnapShot, state: RouterStateSnapshot): Observable <boolean>
| boolean
return this. CanActivate(route, state)
}
