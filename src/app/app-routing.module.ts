import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth-guard.service';

import { SetupGuard } from './setup-guard.service';
import { SetupComponent } from './setup/setup.component';

import { NewIssueComponent } from './new-issue/new-issue.component';
import { IssueListComponent } from './issue-list/issue-list.component';

const appRoutes = [
  {
    path: '',
    canActivate: [SetupGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '',
        canActivate: [AuthGuard],
        children: [
          {
            path: 'new',
            component: NewIssueComponent
          },

          {
            path: 'list',
          component: IssueListComponent
        },
          {
            path: 'home',
            component: HomeComponent
          }
        ]
      }
    ]
  },
  {
    path: 'setup',
    canActivate: [SetupGuard],
    component: SetupComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }