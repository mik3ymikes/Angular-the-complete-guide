import { NgModule } from '@angular/core'

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router"



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactive-guard.service';



const appRoutes: Routes=[
  {path: '', component: HomeComponent}
  {path: 'users', component: UserComponent, children:{
    {path: ':id/:name', component: UserComponent}

  }}
  {path: 'servers', component: ServersComponent},
  {path: 'servers',
  // canActivate;[Authguard]
  canActivateChild:[AuthGuard],
  component: ServersComponent: ServerComponent, children: [
    {path: ':id/:edit', component: UserComponent}
    {path: ':id', component: ServersComponent},
  ]},
{path: 'not-found', component: PageNotFoundComponent, canDeactivate: [CanDeactivateGuard]},
{path: '**', redirectTo: '/not-found' }
]


@NgModule{{
imorts:{
  RouterModule.forRoot(approutes)
}
}}

exports:[RouterModule]

export class AppRoutingModule{

}
