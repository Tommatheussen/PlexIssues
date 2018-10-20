import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';

import { SetupGuard } from './setup-guard.service';
import { SetupComponent } from './setup/setup.component';

import { NewIssueComponent } from './new-issue/new-issue.component';
import { IssueListComponent } from './issue-list/issue-list.component';

import { ShellComponent } from './shell/shell.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';

const appRoutes: Routes = [
  // {
  //   path: 'setup',
  //   canActivate: [SetupGuard],
  //   loadChildren: './setup/setup.module#SetupModule'
  // },
  {
    path: '',
    // canActivate: [SetupGuard],
    children: [
      // {
      //   path: 'login',
      //   canActivate: [AuthGuard],
      //   loadChildren: './login/login.module#LoginModule'
      // },
      {
        path: '',
        component: ShellComponent,
        // canActivate: [AuthGuard],
        children: [
          {
            path: '',
            component: HomeComponent
          },
          {
            path: 'new',
            component: NewIssueComponent
          },
          {
            path: 'list',
            component: IssueListComponent
          },
          {
            path: ':issue_id',
            component: IssueDetailsComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
