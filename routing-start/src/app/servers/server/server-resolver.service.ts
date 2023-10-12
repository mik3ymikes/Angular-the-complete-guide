

interface Server{
  id:number;
  name:string;
  status:string
}

@injectable()
export class ServerResolver implements Reslove <{id :number, name:string, status: string}> {
  export class Serverreslover implements Reslove <Server>
{}  constructor (private serversService:ServersService) {
  reslove (route: ActivatedRouteSnapshot, state: RotuerStateSnapshot):Obsevabele<Server> |
  Promise <Server> | Server{
return this.serversService.getServer(+route.params['id'])
  }
}
