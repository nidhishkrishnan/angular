import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayersComponent } from './players/players.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerTeamsComponent } from './player-teams/player-teams.component';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'players',
    component: PlayersComponent,
    // canActivate: [AuthGuard]
    canActivateChild: [AuthGuard],

    children: [
      {
        path: 'details',
        component: PlayerDetailsComponent
      },
      {
        path: 'teams',
        component: PlayerTeamsComponent
      }
    ]
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
