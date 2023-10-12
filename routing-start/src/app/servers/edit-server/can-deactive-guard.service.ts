export interface CanComponentDeactivate{
  canDeactivate() => Observable <boolean> | Promise <boolean> | boolean
}

export class CanDeactivateGuard implements Canactivate <CanComponentDeactivate> {
  canDeactivate(component:CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
  CurrentState: RouterStateSnapshot,
  nextState?: RouterStateSnapShot):Observable <boolean> | Promise <boolean> | boolean |

  boolean{
    return component.canDeactivate()
  }
}
